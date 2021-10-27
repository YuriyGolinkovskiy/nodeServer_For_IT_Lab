import mailService from '../services/mailService.js';

class mainController {
    async sendMessage(req, res, next) {
        try {
            const { email, name, phoneNumber, message } = req.body;

            const mess = await mailService.sendMessage(
                email,
                name,
                phoneNumber,
                message
            );
            return res.status(200).json(mess);
        } catch (error) {
            next(error);
        }
    }
}

export default new mainController();
