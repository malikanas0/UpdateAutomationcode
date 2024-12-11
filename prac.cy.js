
/*import { sum } from "../support/Pom";
import { multiply } from "../support/Pom";
import { subtraction} from "../support/Pom";
import { divide } from "../support/Pom";*/
 function sum(value, value2) {
    return value + value2;
  }
   function multiply(value3, value4) {
    return value3 * value4;
  }
   function subtraction(value5, value6) {
    return value5 - value6;
  } function divide(value7, value8) {
    return value7 / value8;
  }

  export function sum(value, value2) {
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
  }

describe("sum functionality", () => {
  it("doing addition", () => {
    const variable = 10;
    const variable1 = 13;
    const result = sum(variable,variable1)
    cy.log("Sum = ", result);
    expect(result).to.be.equal(23);
  });
});

it("make multiply variable",()=>{
    const value3 = 2
    const value4 =2
    const result = multiply(value3,value4)
    cy.log("multiply =", result)
    expect(result).to.be.eq(4)
})

it("make subtraction variable",()=>{
    const value5 = 2
    const value6 =2
    const result = subtraction(value5,value6)
    cy.log("subtraction =", result)
    expect(result).to.be.eq(0)
})

it("make divide variable",()=>{
    const value7 = 4
    const value8 =2
    const result = divide(value7,value8)
    cy.log("divide =", result)
    expect(result).to.be.eq(2)
})