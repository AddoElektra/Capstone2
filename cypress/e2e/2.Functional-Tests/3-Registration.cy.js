describe('test',()=>{
    it('Registration',()=>{
        cy.visit('/')
        cy.get('a.ico-register').click()
        cy.get('input#gender-female').check()
        cy.get('input#FirstName').click().type(Cypress.env('FName'))
        cy.get('input#LastName').click().type(Cypress.env('LName'))
        cy.get('input#Email').click().type(Cypress.env('REmail'))
        cy.get('input#Password').click().type(Cypress.env('Pass'))
        cy.get('input#ConfirmPassword').click().type(Cypress.env('Pass'))
        cy.screenshot('filling-form')
        cy.get('input#register-button').click()
        cy.get('div.page-title').should('contain','Register')
        cy.get('div.page-body').then(($result) => {
            if ($result.text().includes('The specified email already exists')) {
              cy.log('Email already exists, aborting test')
              cy.screenshot('email-exists')
              cy.end() // abort the test
            } else {
              cy.get('div.result').should('contain', 'Your registration completed')
              cy.screenshot('registration')
              cy.get('input.button-1.register-continue-button').click()
              cy.get('div.header-links ul').children('li').first().should('contain', Cypress.env('REmail'))
            }
          })
    })
})