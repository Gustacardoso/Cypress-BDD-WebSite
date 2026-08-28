/// <reference types="cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import ExtratoPage from "../../../support/pages/ExtratoPage"

Given('Que aplico extrato', () => {
    ExtratoPage.abrirMenuExtrato()
})
When('seleciono o mes {string}', (mes) => {
    ExtratoPage.selecionarMes(mes)
})
And('seleciono o ano {string}', (ano) => {
    ExtratoPage.selecionarAno(ano)
})
And('Aplico o botao buscar', () => {
    ExtratoPage.buscar()
})
Then('vejo o lancamento {string} no extrato', (descricao) => {
    ExtratoPage.validarLancamento(descricao)
})
Then('a tabela de extrato esta vazia', () => {
    ExtratoPage.validarSemLancamentos()
})
