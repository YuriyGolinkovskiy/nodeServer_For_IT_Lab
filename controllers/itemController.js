import catalogService from '../services/catalogService.js';
import productService from '../services/productService.js';
import MyError from '../middlewares/myError.js';
import Catalog from '../database/Catalog.js';
import Product from '../database/Product.js';

class itemController {
    async addCatalog(req, res, next) {
        try {
            const { title, url, products } = req.body;
            if (title == null || url == null || products == null) {
                throw MyError.BadRequest('Переданы не все заголовки');
            }
            const catalog = await Catalog.create({ title, url, products });
            return res.status(200).json(catalog);
        } catch (error) {
            next(error);
        }
    }
    async getCatalogs(req, res, next) {
        try {
            const catalogs = await Catalog.find();
            if (catalogs == null) throw MyError.NotFound('Каталоги не найдены');
            return res.status(200).json(catalogs);
        } catch (error) {
            next(error);
        }
    }
    async getCatalog(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                throw MyError.BadRequest('Id не передан');
            }
            const catalog = await Catalog.findById(id);
            if (catalog == null) throw MyError.NotFound('Каталог не найден');
            return res.status(200).json(catalog);
        } catch (error) {
            next(error);
        }
    }
    async updateCatalog(req, res, next) {
        try {
            const { catalog } = req.body;
            if (!catalog) {
                throw MyError.BadRequest('Каталог не передан');
            }
            const updateCatalog = await Catalog.findByIdAndUpdate(
                catalog._id,
                catalog,
                { new: true }
            );
            if (updateCatalog == null)
                throw MyError.NotFound('Не удалось обновить каталог');
            return res.status(200).json(updateCatalog);
        } catch (error) {
            next(error);
        }
    }
    async deleteCatalog(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                throw MyError.BadRequest('Id не передан');
            }
            const catalog = await Catalog.findByIdAndDelete(id);
            if (catalog == null)
                throw MyError.NotFound('Каталог не удалось удалить');
            return res.status(200).json(catalog);
        } catch (error) {
            next(error);
        }
    }

    async addProduct(req, res, next) {
        try {
            const { about, name, price, url } = req.body;

            if (about == null || name == null || price == null || url == null) {
                throw MyError.BadRequest('Переданы не все заголовки');
            }
            if (String(parseFloat(price, 10)) !== String(price))
                throw MyError.BadRequest('Цена не число!');
            const product = await Product.create({ about, name, price, url });
            return res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

    async getProducts(req, res, next) {
        try {
            const products = await Product.find();
            return res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    }

    async getProduct(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                throw MyError.BadRequest('Id не передан');
            }
            const product = await Product.findById(id);
            if (product == null) throw MyError.NotFound('Продукт не найден');
            return res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }
    async updateProduct(req, res, next) {
        try {
            const { product } = req.body;
            if (!product) {
                throw MyError.BadRequest('Продукт не передан');
            }
            if (String(parseFloat(product.price, 10)) !== String(product.price))
                throw MyError.BadRequest('Цена не число!');
            const updateProduct = await Product.findByIdAndUpdate(
                product._id,
                product,
                { new: true }
            );
            if (updateProduct == null)
                throw MyError.NotFound('Продукт не удалось обновить');
            return res.status(200).json(updateProduct);
        } catch (error) {
            next(error);
        }
    }
    async deleteProduct(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                throw MyError.BadRequest('Id не передан');
            }
            const product = await Product.findByIdAndDelete(id);
            if (product == null)
                throw MyError.NotFound('Продукт не удалось удалить');
            return res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

    async getProductsForCatalog(req, res, next) {
        try {
            const { catalogId } = req.params;
            if (!catalogId) {
                throw MyError.BadRequest('Id не передан');
            }
            const catalog = await Catalog.findById(catalogId);
            if (catalog == null) throw MyError.NotFound('Каталог не найден');
            const products = await Product.find({
                _id: { $in: catalog.products },
            });
            if (products == null)
                throw MyError.NotFound('Не удалось найти продукты в каталоге');
            return res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    }

    getHeaders(req, res, next) {
        try {
            //const { catalogId } = req.body;
            return res.status(200).json(req.headers);
            return res.status(200).json(req.query);
        } catch (error) {
            next(error);
        }
    }
}

export default new itemController();
