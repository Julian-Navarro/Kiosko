const { Router } = require("express");
const router = Router();
const { Product, Supplier } = require("../db");
const { postSupplier } = require("./controllers/ControllersSupplier/postSupplier");

router.get("/", async (req, res) => {
    try {
        const suppliers = await Supplier.findAll({
            include: {
                model: Product,
                // attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })

        if (!suppliers.length) throw Error("Suppliers DB is empty")
        res.status(200).send(suppliers)
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: "Error on get /suppliers" })
    }
});

router.get("/names", async (req, res) => {
    try {
        const names = await Supplier.findAll({
            attributes: ["name"]
        })
        if(names && names.length) return res.status(200).send(names)
        res.status(404).send({msg: "Suppliers names not found /suppliers/names"})
    } catch (error) {
        console.log(error);
        res.status(404).send({msg: "Error on get /suppliers/names"})
    }
})

router.get("/:id", async (req, res)=>{
    try {
        const { id } = req.params;
        const findSupplier = await Supplier.findByPk(id, {
            include: 'products'
          })
        
        res.status(200).send(findSupplier)
    } catch (error) {
        console.log(error);
        res.status(404).send({msg: "Error getting Supplier by id"})
    }
})

router.post("/", async (req, res) => {
    try {
        console.log("REQ BODYYY: ", req.body);
        const newSupplier = await postSupplier(req.body);
        res.status(200).send(newSupplier)
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: "Error on post /suppliers" })
    }
})

router.put("/", async (req, res) => {
    try {
        const { id, name, allowCount, deliveryDays, minimumPurchase, annotations } = req.body;
        let supplier = await Supplier.findByPk(id);
        if (!supplier) return res.status(404).send({ msg: "No supplier found" })
        let newSupplier = {
            name,
            allowCount,
            deliveryDays,
            minimumPurchase,
            annotations
        };
        for(prop in newSupplier) {
            supplier[prop] = newSupplier[prop] 
        }

        supplier.save()
        res.status(200).send({msg: `Supplier ${supplier.name} updated`})
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: "Error on put /suppliers" })
    }
})

module.exports = router;