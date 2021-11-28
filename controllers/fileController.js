import fileService from '../services/fileService.js';
import MyError from '../middlewares/myError.js';

class fileController {
    async loadFiles(req, res, next) {
        try {
            const files = req.files;

            if (files == null) {
                throw MyError.BadRequest('Файлы не переданы');
            }
            const fileNames = fileService.saveFiles(files);
            if (fileNames == null) {
                throw MyError.BadRequest('Файлы не удалось загрузить');
            }
            return res.status(200).json(fileNames);
        } catch (error) {
            next(error);
        }
    }
}

export default new fileController();
