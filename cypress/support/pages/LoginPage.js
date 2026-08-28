import loc from "../enum/enumLocators"

class LoginPage {
    visit() {
        cy.visit('/login')
    }
    fillEmail(email) {
        cy.get(loc.LOGIN.email).type(email)
    }
    fillPassword(password) {
        cy.get(loc.LOGIN.password).type(password)
    }
    submit() {
        cy.get(loc.LOGIN.btn_login).click()
    }
    login(email, password) {
        this.fillEmail(email)
        this.fillPassword(password)
        this.submit()
    }
    seeSuccessAlert(texto) {
        cy.get(loc.LOGIN.alert).should('contain', texto)
    }
    seeEditAlert(texto) {
        cy.get(loc.LOGIN.alert).should('contain', texto)
    }
}

export default new LoginPage()
