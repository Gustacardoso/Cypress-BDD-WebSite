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
   },
   Texto:{
      adiciona:'Adiciona',
      randomName: randomName
   }
}

export default locators;