describe('test',()=>{
    it('Product Search',()=>{
        cy.visit('/')
        cy.fixture('product').then((pro)=>{
            cy.get('input#small-searchterms').click().type(pro.product1)
            cy.get('input.button-1.search-box-button').click()
            cy.get('div.inputs').first().children('input').should('have.value',pro.product1)
            cy.get('div.product-grid').children().should('have.length.greaterThan',0)
            cy.screenshot('product1')
            cy.contains(pro.product2).click({force:true})
            cy.get(".page-title > h1").should('contain',pro.product2)
            cy.get('.product-grid').children().should('have.length.greaterThan',0)
            cy.screenshot('product2')
            cy.contains(pro.product3).click({force:true})
            cy.get(".page-title > h1").should('contain',pro.product3)
            cy.get('.product-grid').children().should('have.length.greaterThan',0)
            cy.screenshot('product3')
        })
    })
})