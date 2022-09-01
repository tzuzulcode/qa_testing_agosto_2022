// Tax -> 0-5000 5%, 5001-15000 15%, >15000 30%

function calculate_tax(income){

    if(income<0){
        return "No negative numbers"
    }
    if(typeof income !== "number"){
        return "Only numbers"
    }

    if(income>=0 && income<=5000){
        return income*0.05
    }else if(income>5000 && income<=15000){
        return income*0.15
    }else if(income>15000){
        return income*0.3
    }

    // return income
}

module.exports = {
    calculate_tax
}