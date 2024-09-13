describe('test',() =>{
    it('Homepage Content',()=>{
        cy.visit('/')
        cy.get('div.search-box').as('search-box')
        cy.get('@search-box').should('be.visible')
        cy.get('div.title').should('contain','Categories')
        cy.get('div.listbox ul.list').children('li').should('have.length.greaterThan',0)
        cy.get('div.topic-html-content').should('contain','Welcome to our store')
        cy.get('div.title').should('contain','Featured products')
        cy.get('div.item-box').should('have.length.greaterThan',2)
        cy.screenshot('homepage')
    })
})