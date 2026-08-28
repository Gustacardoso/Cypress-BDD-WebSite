Feature: login

    Scenario: validar login
        Given Estou na tela de login
        When Informo meu email "Chiplim@hotmail.com"
        And Informo minha senha "123456"
        And Aplico o botao de entrar
        Then Vejo a tela da home "Bem vindo, chico"

    Scenario: login com senha inválida
        Given Estou na tela de login
        When Informo meu email "Chiplim@hotmail.com"
        And Informo minha senha "senhaErrada"
        And Aplico o botao de entrar
        Then Vejo mensagem de erro "Problemas com o login do usuário"

    Scenario: login sem informar email
        Given Estou na tela de login
        When Informo minha senha "123456"
        And Aplico o botao de entrar
        Then Vejo mensagem de erro "Email é um campo obrigatório"

    Scenario: login sem informar senha
        Given Estou na tela de login
        When Informo meu email "Chiplim@hotmail.com"
        And Aplico o botao de entrar
        Then Vejo mensagem de erro "Senha é um campo obrigatório"

    Scenario: logout
        Given Estou na tela de login
        When Informo meu email "Chiplim@hotmail.com"
        And Informo minha senha "123456"
        And Aplico o botao de entrar
        And Aplico o logout
        Then Vejo a tela de login novamente