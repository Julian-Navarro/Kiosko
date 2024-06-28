const { Router } = require("express");
const router = Router();
const productsRouter = require("./productsRouter");
const suppliersRouter = require("./suppliersRouter");

// importar todos los controllers

// configurar los routers

router.use("/products", productsRouter);
router.use("/suppliers", suppliersRouter);

module.exports = router;