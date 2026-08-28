import loc from "../enum/enumLocators"

class MovimentacaoPage {
    abrirMenuMovimentacao() {
        cy.get(loc.MOVIMENTACAO.menu).click()
    }
    selecionarTipo(tipo) {
        cy.get(loc.MOVIMENTACAO.tipo).select(tipo)
    }
    informarDataTransacao(data) {
        cy.get(loc.MOVIMENTACAO.data_transacao).type(data)
    }
    informarDataPagamento(data) {
        cy.get(loc.MOVIMENTACAO.data_pagamento).type(data)
    }
    informarDescricao(descricao) {
        cy.get(loc.MOVIMENTACAO.descricao).type(descricao)
    }
    informarInteressado(interessado) {
        cy.get(loc.MOVIMENTACAO.interessado).type(interessado)
    }
    informarValor(valor) {
        cy.get(loc.MOVIMENTACAO.valor).type(valor)
    }
    selecionarPrimeiraConta() {
        cy.get(loc.MOVIMENTACAO.conta).find('option').eq(0).then(opcao => {
            cy.get(loc.MOVIMENTACAO.conta).select(opcao.val())
        })
    }
    marcarComoPago() {
        cy.get(loc.MOVIMENTACAO.status_pago).check()
    }
    marcarComoPendente() {
        cy.get(loc.MOVIMENTACAO.status_pendente).check()
    }
    salvar() {
        cy.get(loc.LOGIN.btn_login).click()
    }
}

export default new MovimentacaoPage()
