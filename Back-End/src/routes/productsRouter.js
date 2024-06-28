const { Router } = require("express");
const router = Router();
const { Product, Supplier } = require("../db");
const { postProduct } = require("./controllers/ControllersProduct/postProduct")
const { updateProduct } = require("./controllers/ControllersProduct/updateProduct")

router.get("/", async (req, res)=>{
try {
    const products = await Product.findAll({include: {
        model: Supplier, 
        // attributes: ['name'],
        through: {  
            attributes: []
          }
    }});
    products.length === 0
    ? res.status(404).send({msg: "No products on DB"})
    : res.status(200).send(products)
} catch (error) {
    console.log("ERROR\n", error);
    res.status(404).send({msg: "Error on get products"})
}
})
router.get("/:id", async (req, res)=>{
    try {
        const { id } = req.params;
        const findProduct = await Product.findByPk(id, {
            attributes: ['id', 'name', 'available', 'expirationDate', 'quantity', 'img']
          })
        res.status(200).send(findProduct)
    } catch (error) {
        console.log(error);
        res.status(404).send({msg: "Error getting product by id"})
    }
})
router.post("/", async (req, res)=>{
    try {
        const newProduct = await postProduct(req.body)
        res.status(200).send(newProduct)
    } catch (error) {
        console.log("ERROR\n", error);
        res.status(404).send({msg: "Error posting product"})
    }
});

router.put("/", async (req, res) => {
    try {
        console.log(req.body, "REQ BODY");
        const updatedProduct = await updateProduct(req.body)
        console.log(updatedProduct, "ASDDDDDDDDDDDDDDDDDDDDDDDDD");
        if (!updatedProduct[0]) return res.status(404).send({msg: "No product find"})
        res.status(200).send(updatedProduct)
    } catch (error) {
        console.log("ERROR\n",error);
        res.status(404).send({msg: "Error updating product"})
    }
})
module.exports = router;