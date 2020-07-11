import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import createConnection from './database';

//Inicia o Express
const app = express();

//Conecta ao banco de dados.
createConnection();

//Aplica o cors na aplicação para poder ser acessado externamente.
app.use(cors());

//Informa a aplicação que será ultilizado json.
app.use(express.json());

//Informa para a aplicação onde estão as rotas.
app.use(routes);

//Informa a porta que a aplicação será executada.
app.listen(3333);

export default app;