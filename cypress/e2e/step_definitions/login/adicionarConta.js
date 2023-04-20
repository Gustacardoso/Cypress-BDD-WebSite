/// <reference types="cypress" />


import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given('Que aplico conta', () =>{
    cy.get('[data-toggle=dropdown').click();
})

When("aplicar adicionar", () => {
    cy.get('.dropdown-menu').contains('Adicionar').click();
})
var faker = require('faker');
var randomName = faker.name.findName();
And("informo o nome", () =>{
    cy.get('#nome').type(randomName);
})

And("Aplico o botao salvar", ()=>{
    cy.get('.btn').contains('Salvar').click();
})
Then("mostra alerta de conta salva", ()=>{
    cy.get(".alert").should("contain","Conta adicionada com sucesso!");
})

When("aplicar listar", ()=>{
    cy.get('.dropdown-menu').contains('Listar').click();
})
Then("Lista informada",()=>{
    cy.get("#tabelaContas").should("contain","Conta");
})
And("aplicar editar conta",()=>{
    cy.get("[href='/editarConta?id=820325'] > .glyphicon").click();
})
var nomealeterado = faker.name.findName();
And("Editando conta",()=>{
    cy.get("#nome").clear();
    cy.get("#nome").type(nomealeterado);
})
Then("Conta alterada com sucesso",()=>{
    cy.get(".alert").should("contain","Conta alterada com sucesso!");
})
