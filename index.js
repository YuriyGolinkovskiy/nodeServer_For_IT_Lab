import express from 'express';
import config from 'config';
import router from './routes/routes.js';
import corsMiddleware from './middlewares/corsMiddleware.js';

const PORT = process.env.PORT || config.get('serverPort');

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => console.log('Server started on port ' + PORT + '...'));
