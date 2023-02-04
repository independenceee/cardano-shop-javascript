const { databasesMysql } = require("../../configs/databases");

class ProductsController {
    async getAllProducts(request, response) {
        try {
            const query = "SELECT * FROM products";
            databasesMysql.query(query, function (error, data) {
                if (error) {
                    response.status(404).json({
                        message: error,
                    });
                }
                response.status(200).json({
                    data,
                });
            });
        } catch (error) {
            if (error instanceof Error) {
                response.status(404).json({
                    message: error,
                });
            }
        }
    }

    async getProductById(request, response) {
        try {
            const { id } = request.params;
            const query = "SELECT * FROM products WHERE id = ?";
            databasesMysql.query(query, [id], function (error, data) {
                if (error) {
                    response.status(404).json({
                        message: error,
                    });
                }
                response.status(200).json({
                    data,
                });
            });
        } catch (error) {
            if (error instanceof Error) {
                response.status(404).json({
                    message: error,
                });
            }
        }
    }
}

module.exports = new ProductsController();
