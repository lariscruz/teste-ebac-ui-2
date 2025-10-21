/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username') .type('larissa.teste@gmail.com')
        cy.get('#password') .type('testeebac1')
        cy.get('.woocommerce-form > .button') .click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain', 'Olá, larissa.teste-5308 (não é larissa.teste-5308? Sair)')


    })


})