describe('full website automation',()=>{
    it('login page automation',()=>{
            cy.visit('https://bstackdemo.com/')
            cy.get('#signin').click()
            cy.get('[class=" css-1wa3eu0-placeholder"]').eq(0).should('have.text','Select Username').click()
            cy.wait(4000)
            cy.contains('demouser').eq(0).click()
})
})