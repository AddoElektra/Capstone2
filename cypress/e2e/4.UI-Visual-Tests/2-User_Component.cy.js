describe('test', () => {
    it('User Render Correctly', () => {
        cy.visit('/')
        cy.login(Cypress.env('Email'), Cypress.env('Pass'))
        cy.get('a.account').first().click()
        cy.get('input#FirstName').should('have.value', Cypress.env('FName')).and('be.visible')
            .screenshot('First-Name')
        cy.get('input#LastName').should('have.value', Cypress.env('LName')).and('be.visible')
            .screenshot('Last-Name')
        cy.get('input#Email').should('have.value', Cypress.env('Email')).and("be.visible")
            .screenshot('Email')
    })
})