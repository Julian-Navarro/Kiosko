const { Router } = require("express");
const router = Router();
const { Product, Supplier } = require("../db");
const { postSupplier } = require("./controllers/ControllersSupplier/postSupplier")

router.get("/", async (req, res) => {
    try {
        const suppliers = await Supplier.findAll()
        if(!suppliers.length) throw Error("Suppliers DB is empty")
        res.status(200).send(suppliers)
    } catch (error) {
        console.log(error);
        res.status(404).send({msg: "Error on get /suppliers"})
    }
});

router.post("/", async (req, res) => {
    try {
        const newSupplier = await postSupplier(req.body);
        res.status(200).send(newSupplier)
    } catch (error) {
        console.log(error);
        res.status(404).send({msg: "Error on post /suppliers"})
    }
})

module.exports = router;