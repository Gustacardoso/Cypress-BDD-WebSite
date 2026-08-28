Feature: Cadastro de conta

 Background:
         Given Estou na tela de login
         When Informo meu email "Chiplim@hotmail.com"
        And Informo minha senha "123456"
        And Aplico o botao de entrar

Scenario: adicionar conta
    Given Que aplico conta
    When  aplicar adicionar
    And informo o nome
    And Aplico o botao salvar
    Then mostra alerta de conta salva "Conta adicionada com sucesso!"

Scenario: Listar conta
    Given Que aplico conta
    When aplicar listar
    Then Lista informada


Scenario: Editar conta
    Given Que aplico conta
    When aplicar listar
    And aplicar editar conta
    And Editando conta
    And Aplico o botao salvar
    Then Conta alterada com sucesso "Conta alterada com sucesso!"
    Then Lista informada

Scenario: Excluir conta
    Given Que aplico conta
    When  aplicar adicionar
    And informo o nome
    And Aplico o botao salvar
    Given Que aplico conta
    When aplicar listar
    And aplicar excluir conta
    Then mostra alerta de conta removida "Conta removida com sucesso!"

Scenario: Adicionar conta sem informar o nome
    Given Que aplico conta
    When  aplicar adicionar
    And Aplico o botao salvar
    Then mostra alerta de conta salva "Conta adicionada com sucesso!"
