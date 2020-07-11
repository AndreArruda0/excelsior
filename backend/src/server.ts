import express from 'express';
import cors from 'cors';

//Inicia o Express
const app = express();

//Aplica o cors na aplicação para poder ser acessado externamente.
app.use(cors());

//Informa a aplicação que será ultilizado json
app.use(express.json());

//Informa a porta que a aplicação será executada
app.listen(3333);

export default app;