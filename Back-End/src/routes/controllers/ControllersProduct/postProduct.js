const { Product, Supplier } = require("../../../db");

async function postProduct({ name, available, expirationDate, quantity, img, supplier, salePrice, internalPrice }) {        
    if(typeof available !== "boolean") throw Error({msg: "Available is not a Boolean"})
    if(!name || typeof name !== "string") throw Error({msg: "Missing product name / Name is not a string"});
    let obj = {
        name,
        available,
        expirationDate: expirationDate?expirationDate:"",
        quantity: quantity?quantity:0,
        img,
        salePrice,
        internalPrice
    }
    const newProduct = await Product.create(obj);
    if(supplier) {
        const findSupplier = await Supplier.findOne({where: {name: supplier}})
        await newProduct.addSupplier(findSupplier);
    }
    return newProduct
}

module.exports = {
    postProduct
}