"use strict";
var mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 },
];
var products = [
    { name: 'Scarf', price: 15.99 },
    { name: 'Hat', price: 25.99 },
    { name: 'Mittens', price: 12.99 },
];
function calcAverageProductPrice(param) {
    var totalPrice = 0;
    for (var _i = 0, param_1 = param; _i < param_1.length; _i++) {
        var params = param_1[_i];
        totalPrice += params.price;
    }
    return totalPrice / param.length;
}
var averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
var inventory = [
    {
        product: {
            name: 'Motor',
            price: 10
        },
        quantity: 10
    },
    {
        product: {
            name: 'Sensor',
            price: 12.5
        },
        quantity: 4
    },
    {
        product: {
            name: 'LED',
            price: 1
        },
        quantity: 20
    }
];
//Really close to figuring this one out, I think something is wrong with my syntax in line 83
//   function calcInventoryValue((param: InventoryItem[]):number{
//     let totalValue = 0;
//     for (let i = 0; i < param.length; i++) {
//         totalValue += parseInt(param.[i].price)*(param[i].quantity);
//       }
//   }
//   let inventoryValue = calcInventoryValue(inventory);
//   console.log(inventoryValue);
