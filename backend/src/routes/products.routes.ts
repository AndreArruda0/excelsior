import {Router} from 'express';
import {getRepository} from 'typeorm';
import Product from '../models/Product';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
    const productsRepository = getRepository(Product);

    const products = productsRepository.find();

    return response.json(products);
})


export default productsRouter;