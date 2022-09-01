const OrdersService = require("../services/orders")
const {calculate_tax} = require("../functions/tax")

const calculateTotal = (id)=>{
    const order = OrdersService.getById(id)
    const products = order.data.products;

    const total = OrdersService.getTotal(products)

    const totalWithTax = total + calculate_tax(total)

    return {
        total,
        totalWithTax
    }
}

module.exports = {
    calculateTotal
}