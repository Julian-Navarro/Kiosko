const { Product, Supplier } = require("../../../db");
const { checkUpdateProduct } = require("../ControllersProduct/checkUpdateProduct");

  async function updateProduct({id, name, available, expirationDate, quantity, img}) {        
    checkUpdateProduct({ id, name, available, expirationDate, quantity, img });
    const updatedProduct = await Product.update( { id, name, available, expirationDate, quantity, img }, {where: {id}});
    return updatedProduct
}

module.exports = {
    updateProduct
}