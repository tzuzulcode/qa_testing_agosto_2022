const Chai = require("chai")
const expect = Chai.expect

const OrdersService = require("../services/orders")
const OrdersController = require("../controllers/orders")

describe("Orders", () => {

    it("Should calculate the total", () => {
        // Integración
        const total = OrdersController.calculateTotal("abc123")

        const expectedTotal = 45.67 + 566.33

        expect(total).to.be.a("object")
        expect(total.total).to.be.a("number")
        expect(total.total).to.be.equals(expectedTotal)
        expect(total.totalWithTax).to.be.a("number")
        expect(total.totalWithTax).to.be.equals(expectedTotal + expectedTotal * 0.05)
    })

    it("Should calculate the sum of the products", () => {
        let total = OrdersService.getTotal([{ name: "televisor", price: 45.67 }, { name: "computadora", price: 566.33 }])

        expect(total).to.be.a("number")
        expect(total).to.be.equals(45.67 + 566.33)
    })
})