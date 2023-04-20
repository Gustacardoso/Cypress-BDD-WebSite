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