Feature: login sucesso

    Scenario: validar login
        Given Estou na tela de login
        When Informo meu email
        And Informo minha senha 
        And Aplico o botao de entrar
        Then Vejo a tela da home