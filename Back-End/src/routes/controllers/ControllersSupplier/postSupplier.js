const { Product, Supplier } = require("../../../db");


async function postSupplier  ({name, deliveryDays, minimumPurchase, annotations, allowCount, purchases, transactions}) {
    if(!name) throw new Error("Missing name to create new Supplier")
    if(allowCount === undefined) throw new Error("Allow Count parameter is missing")
    if(!deliveryDays) throw new Error("Missing 'deliveryDays' info")
        console.log("NAME", name);
    const supplier = { name, deliveryDays, minimumPurchase, annotations, purchases, allowCount, transactions }
    const newSupplier = await Supplier.create(supplier)
    return newSupplier
}
module.exports = {
    postSupplier
}