import { demoqaverifyaddnewuser, verifydraganddrop, verifyprogressbar, verifytooltip } from "../../utlis/demoqalocator"
import { verifyeditfunctionality } from "../../utlis/demoqalocator";
import { verifybrokenimage } from "../../utlis/demoqalocator";
import { verifythesubmitform } from "../../utlis/demoqalocator";
    beforeEach(()=>{cy.visit('https://demoqa.com/')})
  describe('demoqa site automation',()=>{
    it('verify user can enter new data into the table',()=>{
        cy.url().should('include','com')
        cy.get(demoqaverifyaddnewuser.navigatetoelement).eq(0).click()
        cy.get(demoqaverifyaddnewuser.clickonwebtales).click().should('have.id','item-3')
        cy.get(demoqaverifyaddnewuser.clickonaddbutton).click().should('have.text','Add')
        cy.get(demoqaverifyaddnewuser.adduserfirstname).type('Alden').should('have.value', 'Alden')
        cy.get(demoqaverifyaddnewuser.adduserlastname).type('Cantrell').should('have.value', 'Cantrell')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.adduserEmail).type('test@test.com').should('have.value', 'test@test.com')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.adduserage).type('30').should('have.value', '30')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.addusersalary).type('12345').should('have.value', '12345')
        cy.get(demoqaverifyaddnewuser.adduserdepartment).type('QA').should('have.value', 'QA')
        cy.get(demoqaverifyaddnewuser.clickonsubmitbtn).click().should('have.text','Submit')
    })
   it('verify user can edit row in a table',()=>{
        cy.get(verifyeditfunctionality.navigatetoelement).eq(0).click()
        cy.get(verifyeditfunctionality.clickonwebtales).click().should('have.id','item-3')
        cy.wait(3000)
        cy.get(verifyeditfunctionality.clickonsecroweditbox).should('have.id','edit-record-2').click()
        cy.wait(3000)
        cy.get(verifyeditfunctionality.clearfirstname).should('have.value', 'Alden').clear().type('Gerimedica').and('have.value', 'Gerimedica')
        cy.get(verifyeditfunctionality.clearlastname).should('have.value', 'Cantrell').clear().type('BV').and('have.value', 'BV')
        cy.get(verifyeditfunctionality.clickonsubmitbtn).click().should('have.text','Submit')
    })
    it('Verify Broken images',()=>{
        cy.get(verifybrokenimage.navigatetoelement).eq(0).click()
        cy.get(verifybrokenimage.clickonbrokenimages).click().should('have.id','item-6')
        cy.get(verifybrokenimage.clickonimage).should('have.attr','src','/images/Toolsqa_1.jpg')
    })
    it('Verify user submit the form',()=>{
        cy.get(verifythesubmitform.naviagtetoform).eq(1).click()
        cy.get(verifythesubmitform.clickonpracticefrom).click()//.should('have.id','item-0')
        cy.get(verifythesubmitform.userfirstname).type('Gerimedica')//.should('have.value','Gerimedica')
        cy.get(verifythesubmitform.userlastname).type('BV')//.should('have.value','Gerimedica')
        cy.get(verifythesubmitform.userEmail).type('test@test.com')//.should('have.value', 'test@test.com')
        cy.get(verifythesubmitform.selectgender).eq(0).click()//.should('have.value','Male')
        cy.get(verifythesubmitform.usernumber).type('0123456789')//.should('have.value', '12345')
        cy.get(verifythesubmitform.userdateofbirth).click()//.should('have.value','15 January 1990')
        cy.get(verifythesubmitform.clickonmonth).select('January')
        cy.get(verifythesubmitform.selectyear).select('1990')
        cy.get(verifythesubmitform.selectdate).click()
        cy.get(verifythesubmitform.usersubject).type('Maths')
        cy.get('[id="react-select-2-option-0"]').click()
        cy.get(verifythesubmitform.usercheckbox).click()
        cy.get(verifythesubmitform.uploadpicture).selectFile('/Users/HP/Downloads/image.png')
        cy.get(verifythesubmitform.usercurrentaddress).type('Netherland')
        cy.get(verifythesubmitform.selectuserstate).eq(0).click()
        cy.contains('Haryana').eq(0).click()
        cy.get(verifythesubmitform.selectusercity).eq(1).click()
        cy.contains('Panipat').click()
        cy.get(verifythesubmitform.clickonsubmitbtn).click()
        cy.get(verifythesubmitform.verifytheform).should('have.text','Thanks for submitting the form')
    })
    it('verify the progress bar',()=>{
        cy.get(verifyprogressbar.clickonwidget).eq(3).should('have.class','card-body').click()
        cy.get(verifyprogressbar.navigatetoprogressbar).should('have.id','item-4').click()
        cy.get(verifyprogressbar.clickonstartbtn).should('have.text','Start').click().should('have.text','Stop')
    })
    it('verify the tooltip',()=>{
        cy.get(verifytooltip.clickonwidget).eq(3).should('have.class','card-body').click()
        cy.get(verifytooltip.navigatetotooltip).click()
        cy.get(verifytooltip.hoveronbtn).trigger('mouseover').should('have.text','Hover me to see')
    })
    it('verify user can drag and drop',()=>{
        cy.get(verifydraganddrop.clickonwidget).eq(4).should('have.class','card-body').click()
        cy.get(verifydraganddrop.navigatetodraganddrop).click()
        cy.get(verifydraganddrop.clickondrag).drag(verifydraganddrop.clickondrop,{force:true}).should('be.visible')
        })
    })