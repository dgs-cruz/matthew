import express from 'express';
import { HelloController } from './controller/helloController';

const app = express();
const port = 3000;
const helloController = new HelloController();

app.get('/', (req, res) => helloController.getHello(req, res));

app.listen(port, () => {
    console.log(`👋 Hello from Matthew! Your server is up and running on http://localhost:${port}. 🚀`);
});
