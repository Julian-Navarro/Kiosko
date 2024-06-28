const { Product, Supplier } = require("../../../db");


async function postSupplier  ({name, deliveryDays, minimumPurchase, annotations }) {
    if(!name) throw new Error("Missing name to create new Supplier")
    if(!deliveryDays) throw new Error("Missing 'deliveryDays' info")
        console.log("NAME", name);
    const supplier = { name, deliveryDays, minimumPurchase, annotations, purshases: [] }
    const newSupplier = await Supplier.create(supplier)
    return newSupplier
}
module.exports = {
    postSupplier
}