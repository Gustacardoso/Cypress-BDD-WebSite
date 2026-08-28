/// <reference types="cypress" />


import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pages/LoginPage"

Given('Estou na tela de login', () =>{
    LoginPage.visit()
})
When ('Informo meu email {string}',(email) =>{
    LoginPage.fillEmail(email)
})
And('Informo minha senha {string}', (password) =>{
    LoginPage.fillPassword(password)
})
And('Aplico o botao de entrar', ()=>{
    LoginPage.submit()
})
Then('Vejo a tela da home {string}', (texto)=>{
    LoginPage.seeSuccessAlert(texto)
})
