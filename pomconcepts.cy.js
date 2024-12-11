/*import { steps } from "../../utlis/Pom";
import { itemlistdata } from "../../utlis/Pom";
import { checkallslides } from "../../utlis/Pom";
import { checkselecteditems } from "../../utlis/Pom";
import { checkloginandlogout} from "../../utlis/Pom";
import { checkbuttonsworking } from "../../utlis/Pom";*/
import{testCases} from "../../utlis/Pom";

beforeEach(() => { cy.visit('https://www.demoblaze.com/') })

    it("Testing", () => {
    testCases.steps()
    })

describe("Test project", () => {
    it("display the item list", () => {
      testCases.itemlistdata()
     })
  
     it('check the all side', () => {
     testCases.checkallslides()
     })
   
     it('to check that item selected in cart',() => {
        testCases.checkselecteditems()
  
     })
  
     it ('for login,and logout',() => {
        testCases.checkloginandlogout()
     })
  
     it('to check next and previous button working',() => {
        testCases.checkbuttonsworking()
     })
     
  });