import catalogService from '../services/catalogService.js';
import productService from '../services/productService.js';

class itemController {
    getCatalogs(req, res, next) {
        try {
            const message = catalogService.getCatalogs();
            return res.status(200).json(message);
        } catch (error) {
            next(error);
        }
    }
    getProducts(req, res, next) {
        try {
            const message = productService.getProducts();
            return res.status(200).json(message);
        } catch (error) {
            next(error);
        }
    }
    getProductsForCatalog(req, res, next) {
        try {
            const { catalogId } = req.body;

            const message = productService.getProductsForCatalog(catalogId);
            return res.status(200).json(message);
        } catch (error) {
            next(error);
        }
    }
}

export default new itemController();
