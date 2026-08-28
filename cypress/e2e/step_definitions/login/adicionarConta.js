/// <reference types="cypress" />


import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import ContaPage from "../../../support/pages/ContaPage"
import LoginPage from "../../../support/pages/LoginPage"

Given('Que aplico conta', () =>{
    ContaPage.abrirMenuConta()
})

When("aplicar adicionar", () => {
    ContaPage.clicarAdicionarConta()
})

And("informo o nome", () =>{
    ContaPage.informarNome()
})

And("Aplico o botao salvar", ()=>{
   ContaPage.salvarConta()
})
Then("mostra alerta de conta salva {string}", (texto)=>{
    LoginPage.seeSuccessAlert(texto)
})

When("aplicar listar", ()=>{
    ContaPage.listarContas()
})
Then("Lista informada",()=>{
    ContaPage.validarListaContas()
})
And("aplicar editar conta",()=>{
    ContaPage.clicarEditarConta()
})

And("Editando conta",()=>{
   ContaPage.editarConta()
})
Then("Conta alterada com sucesso {string}",(texto)=>{
    LoginPage.seeEditAlert(texto)
})

And("aplicar excluir conta",()=>{
    ContaPage.removerConta()
})
Then("mostra alerta de conta removida {string}",(texto)=>{
    LoginPage.seeSuccessAlert(texto)
})
