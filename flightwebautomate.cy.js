import {verifyalltestcases } from "../../utlis/flightpro"
beforeEach(()=>{
    cy.visit(("https://www.flightnetwork.com/"), {
        headers: {
         "Accept": "application/json, text/plain, */*",
         "user-Agent": "axios/0.18.0"
        }
        })
})
describe('automate 5 test cases',()=>{
    /*it('test case 01',()=>{
        cy.get(verifyalltestcases.mybookingbutton).eq(0).click()
        cy.get(verifyalltestcases.cacheacceptbtn).click()
        // cy.get('#button-label').should('have.text','Sign in with Google').click()
        // cy.get('[class="LgbsSe-Bz112c"]').click()
        // cy.get('[class="nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb "]>[class="nsm7Bb-HzV7m-LgbsSe-Bz112c"]').click()
        // cy.get('[class="AxOyFc snByac"]')
        //cy.get('[id="button-label"]').parent().click()
        //cy.contains('Sign in with Google').should('be.visible').click()
    })*/
   it('Verify on leaving both email and order number field empty',()=>{
    cy.get(verifyalltestcases.mybookingbutton).eq(0).click().should('have.text', 'My Bookings')
    cy.get(verifyalltestcases.cacheacceptbtn).click()
    cy.get(verifyalltestcases.clickonfindmybooking).eq(1).click().should('have.text', 'Find my booking')
   })
   it('Verify on entering invalid user email format',()=>{
    cy.get(verifyalltestcases.mybookingbutton).eq(0).click().should('have.text', 'My Bookings')
    cy.get(verifyalltestcases.cacheacceptbtn).click()
    cy.get(verifyalltestcases.email).type('111111gmail.com')
    cy.get(verifyalltestcases.ordernumber).click()
    cy.get(verifyalltestcases.errorvalid).click().should('have.text', 'Invalid email address')
   })
   it('Verify on entering valid email and invalid order number',()=>{
    cy.get(verifyalltestcases.mybookingbutton).eq(0).click().should('have.text', 'My Bookings')
    cy.get(verifyalltestcases.cacheacceptbtn).click()
    cy.get(verifyalltestcases.email).type('malikanassultan@gmail.com')
    cy.get(verifyalltestcases.ordernumber).type('1111-111-111')
    cy.get(verifyalltestcases.clickonfindmybooking).eq(1).click()
    cy.get(verifyalltestcases.errormsg).should('have.text','No matching order was found. Check your order information and try again.')
   })
   it.only('Verify on booking of return flight',()=>{
    cy.get(verifyalltestcases.mybookingbutton).eq(0).click()
        cy.get(verifyalltestcases.cacheacceptbtn).click()
        cy.get(verifyalltestcases.clickonreturn).should('have.text','Return').click()
   })

})