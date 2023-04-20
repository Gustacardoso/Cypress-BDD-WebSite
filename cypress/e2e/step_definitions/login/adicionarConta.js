/// <reference types="cypress" />


import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import * as cadastro from "../../../support/cadastroFunction"
import * as login from "../../../support/loginFunction"
Given('Que aplico conta', () =>{
    cadastro.aplica_conta()
})

When("aplicar adicionar", () => {
    cadastro.Adicionar_conta()
})

And("informo o nome", () =>{
    cadastro.nome_random()
})

And("Aplico o botao salvar", ()=>{
   cadastro.contain_salvar()
   login.bt_entrada()
})
Then("mostra alerta de conta salva {string}", (texto)=>{
    login.alert_sucesso(texto)
})

When("aplicar listar", ()=>{
    cadastro.menu_listar()
})
Then("Lista informada",()=>{
    cadastro.tabelas_contas()
})
And("aplicar editar conta",()=>{
    cadastro.aplicar_editar_conta()
})

And("Editando conta",()=>{
   cadastro.editar_conta()
})
Then("Conta alterada com sucesso {string}",(texto)=>{
    login.alert_editar(texto)
})
