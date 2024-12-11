describe('my third test suit', function(){
  it('this is my third test case', function () {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");    
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      //parent child chaining
      //here is another concept and that is aliasing
      cy.get('.products').as('productLocator')
      cy.get('@productLocator').find('.product').each(($el, index, $list) => {
          const textveg=$el.find('h4.product-name').text()
          if(textveg.includes('Cashews'))
          {
              $el.find('button').trigger('click')
          }
      })
      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()
  });
  });
  /*export function sum(value, value2) {
  return value + value2;
}
export function multiply(value3, value4) {
  return value3 * value4;
}
export function subtraction(value5, value6) {
  return value5 - value6;
}
export function divide(value7, value8) {
  return value7 / value8;
}*/