var faker = require('faker');
var randomName = faker.name.findName();
const locators = {
   LOGIN:{
       email:"#email",
       password : "#senha",
       btn_login: ".btn",
       alert: ".alert",
       logout: 'a[href="/logout"]'
   },
   CONTA:{
      Aplica_conta:"[data-toggle=dropdown",
      adiciona_conta:".dropdown-menu",
      nome: "#nome",
      menu: ".dropdown-menu",
      editar_conta:'[href="/editarConta?id=1714724"] > .glyphicon',
      tabela_conta:"#tabelaContas"
   },
   MOVIMENTACAO:{
      menu: '[href="/movimentacao"]',
      tipo: '#tipo',
      data_transacao: '#data_transacao',
      data_pagamento: '#data_pagamento',
      descricao: '#descricao',
      interessado: '#interessado',
      valor: '#valor',
      conta: '#conta',
      status_pago: '#status_pago',
      status_pendente: '#status_pendente'
   },
   EXTRATO:{
      menu: '[href="/extrato"]',
      mes: '#mes',
      ano: '#ano',
      buscar: 'input[value="Buscar"]',
      tabela: '#tabelaExtrato'
   },
   Texto:{
      adiciona:'Adiciona',
      salvar: 'Salvar',
      listar: 'Listar',
      conta:'Conta',
      randomName: randomName
   }
}

export default locators;