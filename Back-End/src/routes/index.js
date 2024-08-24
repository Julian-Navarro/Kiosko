const { Router } = require("express");
const router = Router();
const productsRouter = require("./productsRouter");
const suppliersRouter = require("./suppliersRouter");
const ordersRouter = require("./ordersRouter")
// importar todos los controllers

// configurar los routers

router.use("/products", productsRouter);
router.use("/suppliers", suppliersRouter);
router.use("/orders", ordersRouter);

module.exports = router;