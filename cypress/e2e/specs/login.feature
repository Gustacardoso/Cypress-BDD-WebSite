Feature: login sucesso

    Scenario: validar login
        Given Estou na tela de login
        When Informo meu email "Chiplim@hotmail.com"
        And Informo minha senha "123456"
        And Aplico o botao de entrar
        Then Vejo a tela da home "Bem vindo, chico"