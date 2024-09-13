describe('test',()=>{
    it('Homepage Title',()=>{
        cy.visit('/')
        cy.get('div.header-logo').should('be.visible').screenshot('logo')
        cy.get('div.header-links-wrapper').children().should('be.visible')
    })
})