import loc from "../support/enum/enumLocators"

export function aplica_conta (){ 
    cy.get(loc.CONTA.Aplica_conta).click();
}
export function Adicionar_conta(){
    cy.get(loc.CONTA.adiciona_conta).contains(loc.Texto.adiciona).click();
}
export function nome_random(){
    cy.get(loc.CONTA.nome).type(loc.Texto.randomName);
}
export function contain_salvar(){
    cy.get(loc.LOGIN.btn_login).contains(loc.Texto.salvar)
}
export function menu_listar(){
    cy.get(loc.CONTA.menu).contains(loc.Texto.listar).click();
}
export function tabelas_contas(){
    cy.get(loc.CONTA.tabela_conta).should('contain',loc.Texto.conta);
}

export function aplicar_editar_conta(){
    cy.get(loc.CONTA.editar_conta).click()
}
export function editar_conta(){
    cy.get(loc.CONTA.nome).clear()
    cy.get(loc.CONTA.nome).type(loc.Texto.randomName)

}