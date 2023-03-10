const express = require("express");
const router = express.Router();
const productController = require("../apps/controllers/ProductsController");

router.get("/:id", productController.getProductById);
router.get("/", productController.getAllProducts);

module.exports = router;
