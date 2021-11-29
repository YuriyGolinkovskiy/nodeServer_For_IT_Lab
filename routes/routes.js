import { Router } from 'express';
import mainController from '../controllers/mainController.js';
import itemController from '../controllers/itemController.js';
import fileController from '../controllers/fileController.js';

const router = Router();

router.post('/sendMessage', mainController.sendMessage);

router.get('/', (req, res, next) => {
    res.status(200).json(
        'API Работает. Обратись к документации, она должна быть тут)'
    );
});

router.get('/getProducts', itemController.getProducts);
router.get('/getProduct/:id', itemController.getProduct);
router.post('/addProduct', itemController.addProduct);
router.put('/updateProduct', itemController.updateProduct);
router.delete('/deleteProduct/:id', itemController.deleteProduct);

router.get(
    '/getProductsForCatalog/:catalogId',
    itemController.getProductsForCatalog
);

router.get('/getCatalogs', itemController.getCatalogs);
router.get('/getCatalog/:id', itemController.getCatalog);
router.post('/addCatalog', itemController.addCatalog);
router.put('/updateCatalog', itemController.updateCatalog);
router.delete('/deleteCatalog/:id', itemController.deleteCatalog);

router.get('/getHeaders', itemController.getHeaders);

router.post('/loadFiles', fileController.loadFiles);
router.get('/getFiles', fileController.getFiles);
router.get('/getImg', fileController.getImg);
router.get('/getDocument', fileController.getDocument);
router.get('/getAudio', fileController.getAudio);
router.get('/getOther', fileController.getOther);

export default router;
