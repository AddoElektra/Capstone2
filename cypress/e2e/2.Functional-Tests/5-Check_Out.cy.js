describe('test',() => {
    it('Checkout Funtionality', () => {
        cy.visit('/')
        cy.login(Cypress.env('Email'),Cypress.env('Pass'))
        cy.AddToCart()
        cy.get('li#topcartlink').click()
        cy.screenshot('cart-before-checkout')
        cy.contains('Estimate shipping').scrollIntoView()
        cy.get('select#CountryId').select('India')
        cy.get('input#ZipPostalCode').type(Cypress.env('Pin'))
        cy.get('input#termsofservice').check()
        cy.get('button#checkout.button-1.checkout-button').click()
        cy.get('select#billing-address-select').select('New Address')
        cy.fixture('billing').then((b) => {
            cy.get('input#BillingNewAddress_Company').click().type(b.Company)
            cy.get('input#BillingNewAddress_City').click().type(b.City)
            cy.get('input#BillingNewAddress_PhoneNumber').click().type(b.Tel)
            cy.get('input#BillingNewAddress_Address1').click().type(b.Add)
            cy.get('input#BillingNewAddress_ZipPostalCode').click().type(b.Pin)
        })
        cy.get('select#BillingNewAddress_CountryId').select('India')
        cy.screenshot('billing-address')
        cy.get('input.button-1.new-address-next-step-button').first().click()
        cy.get('select#shipping-address-select').select('Sayani Pramanik, DumDum, Kolkata 700030, India')
        cy.get('input#PickUpInStore').check()
        cy.get('input.button-1.new-address-next-step-button').last().click()
        cy.get('input.button-1.payment-method-next-step-button').click()
        cy.get('input.button-1.payment-info-next-step-button').click()
        cy.get('input.button-1.confirm-order-next-step-button').click()
        cy.get("div.title").should('contain','Your order has been successfully processed!')
        cy.screenshot('successfull-checkout')
    })
})