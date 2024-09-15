describe('test', () => {
  it('Input Field renders correctly', () => {
    cy.visit('/')
    cy.login(Cypress.env('Email'), Cypress.env('Pass'))
    cy.get('input#small-searchterms').should('be.visible')
      .and('have.attr', 'type', 'text').and('have.value', 'Search store').screenshot('Input-Render')
    cy.get('input#pollanswers-1').should('have.attr', 'type', 'radio').and('be.visible')
      .screenshot('radio-rendor')
  })
})

