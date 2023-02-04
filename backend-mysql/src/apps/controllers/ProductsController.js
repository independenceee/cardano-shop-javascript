


class ProductsController {
    async getAllProducts(request, response) {
        try {
        } catch (error) {
            if (error instanceof Error) {
                response.status(404).json({
                    message: error,
                });
            }
        }
    }
}
