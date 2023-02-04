const productsRouter = require("./products.routes");

const router = function (app) {
    app.use("/api/products", productsRouter);
};

module.exports = router;
