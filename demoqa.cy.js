import { Qaweb } from "../../utlis/demoqalocator"
beforeEach(()=>{cy.visit('https://demoqa.com/')})
  describe('demoqa site automation',()=>{
    it('verify user can enter new data into the table',()=>{
        Qaweb.Addnewuser()
    })
   it('verify user can edit row in a table',()=>{
       Qaweb.edituser()
    })
    it('Verify Broken images',()=>{
       Qaweb.brokenimage()
    })
    it.only('Verify user submit the form',()=>{
        Qaweb.usersubmit()
    })
    it('verify the progress bar',()=>{
        Qaweb.progressbar()
    })
    it('verify the tooltip',()=>{
        Qaweb.tooltip()
    })
    it('verify user can drag and drop',()=>{
        Qaweb.dragdrop()
        })
    })