/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
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


})