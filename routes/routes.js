import { Router } from 'express';
import mainController from '../controllers/mainController.js';
import itemController from '../controllers/itemController.js';

const router = Router();

router.post('/sendMessage', mainController.sendMessage);

router.get('/', (req, res, next) => {
    res.status(200).json(
        'API Работает. Обратись к документации, она должна быть тут)'
    );
});

router.get('/getProducts', itemController.getProducts);

router.post('/getProductsForCatalog', itemController.getProductsForCatalog);

router.get('/getCatalogs', itemController.getCatalogs);

export default router;
