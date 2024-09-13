describe('test',()=>{
    it('login',()=>{
        cy.visit('/')
        cy.login(Cypress.env('Email'),Cypress.env('Pass'))
        cy.get('div.header-links ul').children('li').first().should('contain',Cypress.env('Email'))
        cy.screenshot('login')
    })
    it('logout',()=>{
        cy.visit('/')
        cy.login(Cypress.env('Email'),Cypress.env('Pass'))
        cy.get('a.ico-logout').click()
        cy.contains('Log in').should('be.visible')
        cy.screenshot('logout')
    })
})