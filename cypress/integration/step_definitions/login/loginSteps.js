/// <reference types="cypress" />


import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import url from '../../../../cypress.json';

Given('Estou na tela de login', () =>{
    cy.visit(url.baseUrlDev);
})
When ('Informo meu email',() =>{
     cy.get('#email').type('Chiplim@hotmail.com')
})
And('Informo minha senha', () =>{
    cy.get('#senha').type('123456')
})
And('Aplico o botao de entrar', ()=>{
    cy.get('.btn').click()
})
Then('Vejo a tela da home', ()=>{
    cy.get('.alert').contains("Bem vindo, chico")
})
