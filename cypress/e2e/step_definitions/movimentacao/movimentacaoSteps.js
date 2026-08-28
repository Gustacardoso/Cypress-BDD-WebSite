/// <reference types="cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import MovimentacaoPage from "../../../support/pages/MovimentacaoPage"
import LoginPage from "../../../support/pages/LoginPage"

Given('Que aplico movimentação', () => {
    MovimentacaoPage.abrirMenuMovimentacao()
})
When('informo o tipo {string}', (tipo) => {
    MovimentacaoPage.selecionarTipo(tipo)
})
And('informo a data da movimentação {string}', (data) => {
    MovimentacaoPage.informarDataTransacao(data)
})
And('informo a data do pagamento {string}', (data) => {
    MovimentacaoPage.informarDataPagamento(data)
})
And('informo a descricao {string}', (descricao) => {
    MovimentacaoPage.informarDescricao(descricao)
})
And('informo o interessado {string}', (interessado) => {
    MovimentacaoPage.informarInteressado(interessado)
})
And('informo o valor {string}', (valor) => {
    MovimentacaoPage.informarValor(valor)
})
And('seleciono a primeira conta', () => {
    MovimentacaoPage.selecionarPrimeiraConta()
})
And('marco como pago', () => {
    MovimentacaoPage.marcarComoPago()
})
And('marco como pendente', () => {
    MovimentacaoPage.marcarComoPendente()
})
And('Aplico o botao salvar da movimentação', () => {
    MovimentacaoPage.salvar()
})
Then('mostra alerta de movimentacao salva {string}', (texto) => {
    LoginPage.seeSuccessAlert(texto)
})
