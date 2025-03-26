const { Product, Supplier } = require("../../../db");
const { checkUpdateProduct } = require("../ControllersProduct/checkUpdateProduct");

async function updateProduct({ id, name, available, expirationDate, quantity, img, internalPrice, salePrice }) {
  checkUpdateProduct({ id, name, available, expirationDate, quantity, img, internalPrice, salePrice });
  const updatedProduct = await Product.update({ id, name, available, expirationDate, quantity, img, internalPrice, salePrice }, { where: { id } });
  return updatedProduct
}

module.exports = {
  updateProduct
}