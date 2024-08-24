const { Product, Supplier, Order } = require("../../../db");

async function postOrder({ order, supplierId }) {
    try {
        if (typeof order !== 'object') throw new Error("Error. Order is not a object/array");
        if (order.length === 0) throw new Error("Error. Order cannot be empty.");
        let flagTypeOrder = false;
        order.forEach((el) => {
            if (typeof el !== "object") flagTypeOrder = true;
        });
        if (flagTypeOrder) throw new Error("Order only can contains objects");
        if (!supplierId) throw new Error("SupplierId was not found.");
        const findSupplier = await Supplier.findByPk(supplierId);
        if (!findSupplier) throw new Error("Supplier was not found with this ID");
        console.log("ORDER! - ", order);
        const newOrder = await Order.create({order});
        if (!findSupplier) throw new Error("Supplier was not found.");
        console.log("newOrder!!!! - ",newOrder);
        if (!newOrder) throw new Error("That was an error creating new Order");
        await newOrder.addSupplier(findSupplier);
        return newOrder;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    postOrder
}