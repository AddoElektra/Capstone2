describe('test', () => {
    it('Custom commands', () => {
        cy.visit('/')
        cy.login(Cypress.env('Email'), Cypress.env('Pass'))  //custom commands
        cy.Wishlist() // custom command
        cy.get('div#bar-notification.bar-notification.success').should('be.visible')
        cy.get('a.ico-wishlist').first().click()
        cy.get('tbody').children('tr.cart-item-row').should('have.length.greaterThan', 0)
        cy.screenshot('custom-commands')
    })
})