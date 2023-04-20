/// <reference types="cypress" />


import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import * as login from "../../../support/loginFunction"

Given('Estou na tela de login', () =>{
    cy.visit('/login');
})
When ('Informo meu email {string}',(email) =>{
    login.Edt_email(email)
})
And('Informo minha senha {string}', (password) =>{
    login.Edt_password(password)
})
And('Aplico o botao de entrar', ()=>{
    login.bt_entrada()
})
Then('Vejo a tela da home {string}', (texto)=>{
    login.alert_sucesso(texto)
})
