import loc from "../support/enum/enumLocators"

export function Edt_email (email){ 
    cy.get(loc.LOGIN.email).type(email)
}
export function Edt_password(password){
    cy.get(loc.LOGIN.password).type(password)
}
export function bt_entrada (){
    cy.get(loc.LOGIN.btn_login).click()
}
export function alert_sucesso(texto){
    cy.get(loc.LOGIN.alert).should('contain', texto)
}
export function alert_editar(texto){
    cy.get(loc.LOGIN.alert).should('contain', texto)
}