import nodemailer from 'nodemailer';
import config from 'config';

class MailService {
    transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: config.get('smtpHost'),
            port: config.get('smtpPort'),
            secure: false,
            auth: {
                user: config.get('smtpUser'),
                pass: config.get('smtpPassword'),
            },
        });
    }

    async sendMessage(email, name, phoneNumber, message) {
        await this.transporter.sendMail({
            from: config.get('smtpUser'),
            to: config.get('smtpUser'),
            subject: 'Ты получил новое сообщение от ' + email,
            text: '',
            html: `
            <div>
                <h1>Привет, тебе написали!</h1>
                <h3>
                Имя отправителя: ${name}
                </h3>
                <h4>
                Номер телефона пользователя: ${phoneNumber}
                </h4>
                <div>
                    Сообщение:${message}
                </div>
            </div>`,
        });
    }
}
export default new MailService();
