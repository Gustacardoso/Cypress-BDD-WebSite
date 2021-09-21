import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('estou na tela de login', () =>{
    cy.visit('https://seubarriga.wcaquino.me')
})
When ('informo meu email',() =>{
     cy.get('#email').type('Chiplim@hotmail.com')
})
And('informo minha senha', () =>{
    cy.get('#senha').type('123456')
})
And('Aplico o botao de entrar', ()=>{
    cy.get('.btn').click()
})
Then('vejo a tela da home', ()=>{
    cy.get('.alert').contains("Bem vindo, chico")
})
