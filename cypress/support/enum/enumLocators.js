var faker = require('faker');
var randomName = faker.name.findName();
const locators = {
   LOGIN:{
       email:"#email",
       password : "#senha",
       btn_login: ".btn",
       alert: ".alert"
   },
   CONTA:{
      Aplica_conta:"[data-toggle=dropdown",
      adiciona_conta:".dropdown-menu",
      nome: "#nome",
      menu: ".dropdown-menu",
      editar_conta:'[href="/editarConta?id=1714724"] > .glyphicon',
      tabela_conta:"#tabelaContas"
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