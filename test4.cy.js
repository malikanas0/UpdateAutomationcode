describe('My fourth automated test suit',function(){
    it('fouth one automate test case',function(){
        cy.visit('https://demoqa.com/')
       / // Check box concepts
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.wait(4000)
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option2','option3'])
        //static method
        //Dropdown concepts
        cy.get('select').select('option2').should('have.value','option2')
        //dynamic method
        cy.get('#autocomplete').type('pa')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==="Pakistan")
            {
                $el.click()
            }
        })
        //visible and non visible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        //radio buttons concepts
        cy.get('[value="radio2"]').check().should('be.checked')*/
    })
})