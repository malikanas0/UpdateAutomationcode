describe('how to handle alerts',function(){
    it('handle popups and alerts',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window alert concept
        cy.on('window:alert',(Str)=>
        {
            expect(Str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(Str)=>
        {
            expect(Str).to.equal('Hello , Are you sure you want to confirm?')
        })
        //cy.get('#opentab').invoke('removeAttr','target').click()

        //cy.url().should('include','qaclickacademy')

        //cy.go('back')  
    })
})