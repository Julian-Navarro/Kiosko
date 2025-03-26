const { Product, Supplier } = require("../../../db");

async function postProduct({ name, available, expirationDate, quantity, img, supplier, salePrice, internalPrice }) {
    quantity = Number(quantity);
    salePrice = Number(salePrice);
    internalPrice = Number(internalPrice);
    
    if (typeof available !== "boolean") throw Error({ msg: "Available is not a Boolean" });
    if (!name || typeof name !== "string") throw Error({ msg: "Missing product name / Name is not a string" });
    if(typeof quantity !== "number") throw Error({msg: "Quantity is not a number!"});
    if(!expirationDate.trim()) throw Error({msg: "Expiration Date is missing!"});
    if(!img) throw Error({msg: "Img is not a string or is empty"});
    if(internalPrice === 0) throw Error({msg: "Internal Price is not set"});
    if(supplier === "" || supplier === "default") throw Error({msg: "Supplier is not a string or is empty"});
    if(salePrice === 0) throw Error({msg: "Sale Price is not set"});
    let obj = {
        name,
        available,
        expirationDate: expirationDate ? expirationDate : "",
        quantity: quantity ? quantity : 0,
        img,
        salePrice,
        internalPrice
    }
    const newProduct = await Product.create(obj);
    if (supplier) {
        const findSupplier = await Supplier.findOne({ where: { name: supplier } })
        await newProduct.addSupplier(findSupplier);
    }
    return newProduct
}

module.exports = {
    postProduct
};


















