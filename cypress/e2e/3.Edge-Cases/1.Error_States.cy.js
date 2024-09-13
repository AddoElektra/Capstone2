describe('test',()=>{
    it('Invalid Login',()=>{
        cy.visit('/')
        cy.login(Cypress.env('Wr-Email'),Cypress.env('Wr-Pass'))
        cy.get('span.field-validation-error').should('contain','Please enter a valid email address.')
        .and('be.visible')
        cy.screenshot('error')
    })
})