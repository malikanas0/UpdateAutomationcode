let login = require('../../fixtures/login.json')
describe('login',()=>{
    it('login using command js',()=>{
        cy.visit('https://zavep.com/wp-admin')
        cy.get('#user_login').type(login.email)
        cy.get('#user_pass').type(login.password)
    cy.get('#wp-submit').click()
    })
})