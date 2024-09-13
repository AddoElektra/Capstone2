// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-xpath';

Cypress.Commands.add('login', (Email,Pass) => {
    cy.get('a.ico-login').click()
    cy.get('.page-title').should('contain', 'Welcome, Please Sign In!')
    cy.get('input#Email').click().type(Email)
    cy.get('input#Password').click().type(Pass)
    cy.get('input[value="Log in"]').click()
})

Cypress.Commands.add('AddToCart',() => {
    cy.fixture('product').then((p)=>{
        cy.get('input#small-searchterms').click().type(p.product1)
        cy.get('input.button-1.search-box-button').click()
        cy.get('input.button-2.product-box-add-to-cart-button').click()
        cy.get('input#small-searchterms').clear().click().type(p.product4)
        cy.get('input.button-1.search-box-button').click()
        cy.get('input.button-2.product-box-add-to-cart-button').click()
        cy.get('input#small-searchterms').clear().click().type(p.product5)
        cy.get('input.button-1.search-box-button').click()
        cy.get('input.button-2.product-box-add-to-cart-button').click()
    })
})

Cypress.Commands.add('Wishlist',()=>{
    cy.fixture('product').then((p)=>{
        cy.contains(p.product3).click({force:true})
        cy.get(".page-title > h1").should('contain',p.product3)
    })
    cy.get('input.button-2.product-box-add-to-cart-button').eq(1).click()
    cy.get('input#add-to-wishlist-button-28').click()
})