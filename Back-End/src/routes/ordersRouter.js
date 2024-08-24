const { Router } = require("express");
const router = Router();
const { Order, Supplier } = require("../db");
const { postOrder } = require("./controllers/ControllerOrder/postOrder");


router.get("/", async (req, res) => {
    try {
        const DBorders = await Order.findAll({include: {model: Supplier}});
        if (DBorders && DBorders.length) return res.status(201).send(DBorders);
        res.status(404).send({ msg: "DBorders is empty" });
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: "Error on get /orders" });
    }
});

router.post("/", async (req, res) => {
    try {
        const newOrder = await postOrder(req.body);
        if (!newOrder) return res.status(404).send({msg: "Error on post /orders"})
        res.status(201).send(newOrder)
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: error.message });
    }
});

router.put("/", async (req, res) => {
    try {
        // const data = 
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;