import loc from "../enum/enumLocators"
import LoginPage from "./LoginPage"

class ContaPage {
    abrirMenuConta() {
        cy.get(loc.CONTA.Aplica_conta).click()
    }
    clicarAdicionarConta() {
        cy.get(loc.CONTA.adiciona_conta).contains(loc.Texto.adiciona).click()
    }
    informarNome() {
        cy.get(loc.CONTA.nome).type(loc.Texto.randomName)
    }
    salvarConta() {
        cy.get(loc.LOGIN.btn_login).contains(loc.Texto.salvar)
        LoginPage.submit()
    }
    listarContas() {
        cy.get(loc.CONTA.menu).contains(loc.Texto.listar).click()
    }
    validarListaContas() {
        cy.get(loc.CONTA.tabela_conta).should('contain', loc.Texto.conta)
    }
    clicarEditarConta() {
        cy.get(loc.CONTA.editar_conta).click()
    }
    editarConta() {
        cy.get(loc.CONTA.nome).clear()
        cy.get(loc.CONTA.nome).type(loc.Texto.randomName +" "+loc.Texto.randomName)
    }
    removerConta() {
        cy.contains('#tabelaContas tr', loc.Texto.randomName)
            .first()
            .find('a[href^="/removerConta"]')
            .click()
    }
}

export default new ContaPage()
