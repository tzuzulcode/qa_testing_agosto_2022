const order = {
    id:"abc123",
    data:{
        products:[{name:"televisor",price:45.67},{name:"computadora",price:566.33}]
    }
}

class Orders{
    static getTotal(items){
        // [{name:"Televisor",price:123.123}]
        let total = 0
        for (let i = 0; i < items.length; i++) {
            const product = items[i];
            total = total + product.price
        }

        return total
    }

    static getById(id){
        return order
    }
}

module.exports = Orders