describe('Automate full demo website',()=>{
    it('first sign in page automation',()=>{
        cy.visit('https://bstackdemo.com/')
        cy.wait(6000)
        cy.get('#signin').click()
        cy.get('#username').click()
        cy.contains('fav_user').click()
        cy.get('[class=" css-1wa3eu0-placeholder"]').click()
        cy.get('#react-select-3-option-0-0').click()
    })
})