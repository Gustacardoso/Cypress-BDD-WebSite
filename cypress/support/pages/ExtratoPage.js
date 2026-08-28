import loc from "../enum/enumLocators"

class ExtratoPage {
    abrirMenuExtrato() {
        cy.get(loc.EXTRATO.menu).click()
    }
    selecionarMes(mes) {
        cy.get(loc.EXTRATO.mes).select(mes)
    }
    selecionarAno(ano) {
        cy.get(loc.EXTRATO.ano).select(ano)
    }
    buscar() {
        cy.get(loc.EXTRATO.buscar).click()
    }
    validarLancamento(descricao) {
        cy.get(loc.EXTRATO.tabela).should('contain', descricao)
    }
    validarSemLancamentos() {
        cy.get(loc.EXTRATO.tabela).find('tbody tr').should('have.length', 0)
    }
}

export default new ExtratoPage()
