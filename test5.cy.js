import { loginPageSelectors } from "../../utlis/locator"
import { cartform } from "../../utlis/locator"
beforeEach(()=>{cy.visit('https://www.demoblaze.com/')})
describe('Seperate selectors using pom' , function(){
    it('login page selectors' , function() {

        cy.visit('https://www.demoblaze.com/')
        cy.get(loginPageSelectors.loginpagevisit).click()
        cy.wait(4000)
        cy.get(loginPageSelectors.usernameInput).type('Alitest@gmail.com')
        cy.get(loginPageSelectors.passwordInput).type('Password@123')
        cy.wait(4000)
        cy.get(loginPageSelectors.loginButton).eq(2).click()
    })
    it('cart selectors',()=>{
        cy.get(cartform.togetcartform).click()
        cy.get(cartform.placeorder).click()
        
    })
})