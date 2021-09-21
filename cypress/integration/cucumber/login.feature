Feature: login sucesso

    Scenario: validar login
        Given estou na tela de login
        When informo meu email
        And informo minha senha 
        And Aplico o botao de entrar
        Then vejo a tela da home