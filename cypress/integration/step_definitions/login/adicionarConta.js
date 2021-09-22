/// <reference types="cypress" />


import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('Que aplico conta', () =>{
    cy.get('[data-toggle=dropdown').click();
})

When("aplicar adicionar", () => {
    cy.get('.dropdown-menu').contains('Adicionar').click();
})

And("informo o nome", () =>{
    cy.get('#nome').type('gustavo2');
})

And("Aplico o botao salvar", ()=>{
    cy.get('.btn').contains('Salvar').click();
})
Then("mostra alerta de conta salva", ()=>{
    cy.get(".alert").should("contain","Conta adicionada com sucesso!");
})