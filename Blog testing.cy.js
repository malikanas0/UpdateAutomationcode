describe("Guest post publish automation scenario",function(){
    it("simple pick the article and post",function(){
        cy.visit('https://sudamericanadetiro.org/wp-admin')
        cy.get('#user_login').type('malikanassultan@gmail.com')
        cy.get('#user_pass').type('Anas@1141@@@@@')
        cy.get('#wp-submit').click()
        cy.visit('https://sudamericanadetiro.org/wp-admin/post-new.php')
        cy.visit('https://docs.google.com/document/u/0/')
        cy.get()
    })
})