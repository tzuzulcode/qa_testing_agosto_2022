// Mocha: Suite de tests -> Estructura para armar pruebas
// Chai: Asserts -> Aserciones -> Condiciones de prueba

const {calculate_tax} = require("../functions/tax")

const Chai = require("chai")
const expect = Chai.expect


// Mocha
describe("Tax",function(){
    it("Should calculate a tax of 5%",()=>{
        const tax = calculate_tax(5000)
        expect(tax).to.be.a("number")
        expect(tax).to.be.equal(5000*0.05)
    })
    it("Should calculate a tax of 15%",()=>{
        const tax = calculate_tax(5001)
        expect(tax).to.be.a("number")
        expect(tax).to.be.equal(5001*0.15)
    })
    it("Should calculate a tax of 30%",()=>{
        const tax = calculate_tax(15001)
        expect(tax).to.be.a("number")
        expect(tax).to.be.equal(15001*0.3)
    })
    it("Should return error",()=>{
        const tax = calculate_tax("hola")
        expect(tax).to.be.a("string")
        expect(tax).to.be.equal("Only numbers")
        
        const tax2 = calculate_tax(-15000)
        expect(tax2).to.be.a("string")
        expect(tax2).to.be.equal("No negative numbers")
    })
})