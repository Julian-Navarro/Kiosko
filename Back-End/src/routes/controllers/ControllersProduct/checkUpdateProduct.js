const { Product, Supplier } = require("../../../db");

async function checkUpdateProduct({name, available, expirationDate, quantity, img, supplier}) {
    console.log(expirationDate, "NAME");
    if(typeof name !== "string" || typeof expirationDate !== "string" || typeof img !== "string") throw Error("name, img or expirationDate is not a string")
    if(name.length > 50 || expirationDate.length > 20) throw Error("name cannot exceed 50 characters, expirationDate cannot exceed 20 characters")
    if(typeof quantity !== "number") throw Error("quantity is not a number");
    if(typeof available !== "boolean") throw Error("available is not a boolean");   
};

module.exports = {
    checkUpdateProduct
}