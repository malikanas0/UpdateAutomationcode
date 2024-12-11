



describe('test suit of rahul sheety',function(){
    it('automate some scenarios',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[value="radio3"]').check().should('be.checked')
        cy.get('select').select('option1')
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#alertbtn').click()
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })
})
