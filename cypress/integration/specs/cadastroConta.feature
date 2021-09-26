Feature: Cadastro de conta

 Background:
         Given Estou na tela de login
        When Informo meu email
        And Informo minha senha 
        And Aplico o botao de entrar

Scenario: adicionar conta
    Given Que aplico conta
    When  aplicar adicionar
    And informo o nome
    And Aplico o botao salvar
    Then mostra alerta de conta salva

Scenario: Listar conta
Given Que aplico conta
When aplicar listar
Then Lista informada