import { Alltestcase } from "../../utlis/flightpro"

beforeEach(()=>{
    cy.visit(("https://www.flightnetwork.com/"), {
        headers: {
         "Accept": "application/json, text/plain, */*",
         "user-Agent": "axios/0.18.0"
        }
        })
})
describe('automate 5 test cases',()=>{
   it('Verify on leaving both email and order number field empty',()=>{
    Alltestcase.tc01()
   })
   it('Verify on entering invalid user email format',()=>{
    Alltestcase.tc02()
   })
   it('Verify on entering valid email and invalid order number',()=>{
    Alltestcase.tc03()
   })
   it('Verify on booking of return flight',()=>{
    Alltestcase.tc04()
   })
   it.only('verify on booking of one way flight',()=>{
    Alltestcase.tc05()
   })
})