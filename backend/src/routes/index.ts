import {Router} from 'express';
import productsRouter from './products.routes';

//Inicia o roteamento da aplicação
const routes = Router();

routes.use('/products', productsRouter);


export default routes;