describe('my third test suit', function(){
it('this is my third test case', function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");    
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length',4)
    //parent child chaining
    //here is another concept and that is aliasing
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',4)
    cy.get(':nth-child(3) > .product-action > button').click()
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
        console.log('sf')
    })

    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const textveg=$el.find('h4.product-name').text()
        if(textveg.includes('Cashews'))
        {
            $el.find('button').trigger('click')
        }
    })
    // assert that if logo text is correctly diplayed
    cy.get('.brand').should('have.text','GREENKART')
    //this is to print in logs
    cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
})

})
})