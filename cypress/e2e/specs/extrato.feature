Feature: Extrato / Resumo Mensal

  Background:
    Given Estou na tela de login
    When Informo meu email "Chiplim@hotmail.com"
    And Informo minha senha "123456"
    And Aplico o botao de entrar

  Scenario: Ver lançamento do mês atual no extrato
    Given Que aplico movimentação
    When informo o tipo "REC"
    And informo a data da movimentação "28/08/2026"
    And informo a data do pagamento "28/08/2026"
    And informo a descricao "Lançamento do extrato"
    And informo o interessado "QA"
    And informo o valor "250"
    And seleciono a primeira conta
    And marco como pago
    And Aplico o botao salvar da movimentação
    Given Que aplico extrato
    When seleciono o mes "08"
    And seleciono o ano "2026"
    And Aplico o botao buscar
    Then vejo o lancamento "Lançamento do extrato" no extrato

  Scenario: Trocar para um mês sem lançamentos
    Given Que aplico extrato
    When seleciono o mes "01"
    And seleciono o ano "2010"
    And Aplico o botao buscar
    Then a tabela de extrato esta vazia
