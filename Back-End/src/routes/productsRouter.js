const { Router } = require("express");
const router = Router();
const { Product, Supplier } = require("../db");
const { postProduct } = require("./controllers/ControllersProduct/postProduct");
const { updateProduct } = require("./controllers/ControllersProduct/updateProduct");

router.get("/", async (req, res) => {
    try {
        const products = await Product.findAll({
            include: {
                model: Supplier,
                // attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });
        products.length === 0
            ? res.status(404).send({ msg: "No products on DB" })
            : res.status(200).send(products)
    } catch (error) {
        console.log("ERROR\n", error);
        res.status(404).send({ msg: "Error on get products" })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const findProduct = await Product.findByPk(id, {
            include: 'suppliers',
            attributes: ['id', 'name', 'available', 'expirationDate', 'quantity', 'img']
        })
        res.status(200).send(findProduct)
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: "Error getting product by id" })
    }
})

router.post("/", async (req, res) => {
    try {
        const newProduct = await postProduct(req.body)
        res.status(200).send(newProduct)
    } catch (error) {
        console.log("ERROR\n", error);
        res.status(404).send({ msg: "Error posting product" })
    }
});

router.put("/", async (req, res) => {
    try {
        const updatedProduct = await updateProduct(req.body)
        if (!updatedProduct[0]) return res.status(404).send({ msg: "No product find" })
        res.status(200).send(updatedProduct)
    } catch (error) {
        console.log("ERROR\n", error);
        res.status(404).send({ msg: "Error updating product" })
    }
});

router.post("/bulkCreate", async (req, res) => {
    try {
        const { products } = req.body;
        console.log(products);
        products.forEach(async (el) => {
            const findSupplier = await Supplier.findOne({ where: { name: el.suppliers[0].name } });
            const newProduct = await Product.create(el);
            await newProduct.addSupplier(findSupplier);
        });
        res.status(200).send({msg: "Products created succesfully"});
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: `Error on /bulkCreate. ${error.message}` })
    }
})
 
module.exports = router; 