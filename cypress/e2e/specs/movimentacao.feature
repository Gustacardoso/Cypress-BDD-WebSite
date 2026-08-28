Feature: Movimentação

  Background:
    Given Estou na tela de login
    When Informo meu email "Chiplim@hotmail.com"
    And Informo minha senha "123456"
    And Aplico o botao de entrar

  Scenario: Lançar uma receita paga
    Given Que aplico movimentação
    When informo o tipo "REC"
    And informo a data da movimentação "28/08/2026"
    And informo a data do pagamento "28/08/2026"
    And informo a descricao "Salário"
    And informo o interessado "Empresa"
    And informo o valor "1000"
    And seleciono a primeira conta
    And marco como pago
    And Aplico o botao salvar da movimentação
    Then mostra alerta de movimentacao salva "Movimentação adicionada com sucesso!"

  Scenario: Lançar uma despesa pendente
    Given Que aplico movimentação
    When informo o tipo "DESP"
    And informo a data da movimentação "28/08/2026"
    And informo a data do pagamento "28/08/2026"
    And informo a descricao "Aluguel"
    And informo o interessado "Imobiliária"
    And informo o valor "800"
    And seleciono a primeira conta
    And marco como pendente
    And Aplico o botao salvar da movimentação
    Then mostra alerta de movimentacao salva "Movimentação adicionada com sucesso!"

  Scenario: Tentar lançar movimentação sem informar o valor
    Given Que aplico movimentação
    When informo o tipo "DESP"
    And informo a data da movimentação "28/08/2026"
    And informo a data do pagamento "28/08/2026"
    And informo a descricao "Sem valor"
    And informo o interessado "QA"
    And seleciono a primeira conta
    And Aplico o botao salvar da movimentação
    Then Vejo mensagem de erro "Valor é obrigatório"
