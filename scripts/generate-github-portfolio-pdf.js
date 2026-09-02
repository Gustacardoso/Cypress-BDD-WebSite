/**
 * Gera um PDF com 1 screenshot da pagina principal (README renderizado) de
 * cada repositorio publico (nao-fork) de um usuario/organizacao do GitHub.
 *
 * Uso:
 *   node scripts/generate-github-portfolio-pdf.js
 *
 * Variaveis de ambiente opcionais:
 *   GITHUB_USER     usuario/org do GitHub (default: Gustacardoso)
 *   INCLUDE_FORKS   "true" para incluir forks (default: false)
 *   OUTPUT_FILE     caminho do PDF gerado (default: reports/github-portfolio.pdf)
 */

const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");

const GITHUB_USER = process.env.GITHUB_USER || "Gustacardoso";
const INCLUDE_FORKS = process.env.INCLUDE_FORKS === "true";
const OUTPUT_FILE =
  process.env.OUTPUT_FILE || path.join("reports", "github-portfolio.pdf");

const PAGE_WIDTH = 842; // A4 landscape, em pontos
const PAGE_HEIGHT = 595;
const MARGIN = 30;
const TITLE_HEIGHT = 30;

async function fetchPublicRepos(user) {
  const repos = [];
  let page = 1;

  while (true) {
    const url = `https://api.github.com/users/${user}/repos?type=owner&per_page=100&page=${page}&sort=updated`;
    const response = await fetch(url, {
      headers: {
        "User-Agent": "github-portfolio-pdf-script",
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Falha ao buscar repositorios de "${user}": ${response.status} ${response.statusText}`
      );
    }

    const batch = await response.json();
    if (batch.length === 0) break;

    repos.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }

  return repos
    .filter((repo) => INCLUDE_FORKS || !repo.fork)
    .filter((repo) => !repo.archived)
    .sort((a, b) => a.name.localeCompare(b.name));
}

async function screenshotRepo(browser, repo) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  await page.goto(`https://github.com/${repo.full_name}`, {
    waitUntil: "networkidle2",
    timeout: 30000,
  });

  // Da tempo do conteudo do README (quando existir) renderizar.
  await page
    .waitForSelector("#readme", { timeout: 5000 })
    .catch(() => {});

  const screenshot = await page.screenshot({ type: "png" });
  await page.close();
  return screenshot;
}

async function buildPdf(entries, outputFile) {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  for (const { repo, screenshot } of entries) {
    const image = await pdfDoc.embedPng(screenshot);
    const pdfPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);

    const availableWidth = PAGE_WIDTH - MARGIN * 2;
    const availableHeight = PAGE_HEIGHT - MARGIN * 2 - TITLE_HEIGHT;
    const scale = Math.min(
      availableWidth / image.width,
      availableHeight / image.height,
      1
    );
    const drawWidth = image.width * scale;
    const drawHeight = image.height * scale;

    pdfPage.drawText(repo.full_name, {
      x: MARGIN,
      y: PAGE_HEIGHT - MARGIN - TITLE_HEIGHT + 8,
      size: 14,
      font,
      color: rgb(0.1, 0.1, 0.1),
    });

    pdfPage.drawImage(image, {
      x: (PAGE_WIDTH - drawWidth) / 2,
      y: MARGIN,
      width: drawWidth,
      height: drawHeight,
    });
  }

  const pdfBytes = await pdfDoc.save();
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, pdfBytes);
}

async function main() {
  console.log(`Buscando repositorios publicos de "${GITHUB_USER}"...`);
  const repos = await fetchPublicRepos(GITHUB_USER);

  if (repos.length === 0) {
    console.log("Nenhum repositorio encontrado.");
    return;
  }

  console.log(`Encontrados ${repos.length} repositorios. Gerando screenshots...`);

  const browser = await puppeteer.launch({ headless: "new" });
  const entries = [];

  try {
    for (const repo of repos) {
      try {
        console.log(`- ${repo.full_name}`);
        const screenshot = await screenshotRepo(browser, repo);
        entries.push({ repo, screenshot });
      } catch (error) {
        console.warn(`  Falha ao capturar ${repo.full_name}: ${error.message}`);
      }
    }
  } finally {
    await browser.close();
  }

  console.log(`Montando PDF em "${OUTPUT_FILE}"...`);
  await buildPdf(entries, OUTPUT_FILE);
  console.log("PDF gerado com sucesso.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
