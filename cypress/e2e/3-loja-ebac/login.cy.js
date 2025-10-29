/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });


    it('Deve fazer login com sucesso', () =>{
        
        cy.get('#username') .type('larissa.teste@gmail.com')
        cy.get('#password') .type('testeebac1')
        cy.get('.woocommerce-form > .button') .click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain', 'Olá, larissa.teste-5308 (não é larissa.teste-5308? Sair)')

    }),

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username') .type('larissa.teste1@gmail.com')
        cy.get('#password') .type('testeebac1')
        cy.get('.woocommerce-form > .button') .click() 
        cy.get('.woocommerce-error') .should('exist')

    });

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
        cy.get('#username') .type('larissa.teste@gmail.com')
        cy.get('#password') .type('testeebac12')
        cy.get('.woocommerce-form > .button') .click() 
        cy.get('.woocommerce-error') .should('exist')    
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username') .type(perfil.usuário)
        cy.get('#password') .type(perfil.senha)
        cy.get('.woocommerce-form > .button') .click() 
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain', 'Olá, larissa.teste-5308 (não é larissa.teste-5308? Sair)')   
    });

    it.only('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username') .type(dados.usuário)
            cy.get('#password') .type(dados.senha , {log: false}) // use log: false para esconder a senha e não aparecer dados sensíveis
            cy.get('.woocommerce-form > .button') .click() 
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain', 'Olá, larissa.teste-5308 (não é larissa.teste-5308? Sair)')  
        })
    });
})