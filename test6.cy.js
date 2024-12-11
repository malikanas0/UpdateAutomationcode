describe('Checkers website verification',()=>{
    it('verify that each move is working',()=>{
        cy.visit('https://www.gamesforthebrain.com/game/checkers/')
        cy.url().should('include','https://www.gamesforthebrain.com/game/checkers/')
        cy.get('[name="space02"]').click()
        cy.get('[name="space13"]').click().should('have.attr','src','you1.gif')
        //cy.get('[name="space11"]').click()
        //cy.get('[name="space02"]').click()
        cy.get('[name="space62"]').click()
        cy.get(':nth-child(5) > [src="you1.gif"]').click()
    })
})