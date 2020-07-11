import {Router} from 'express';
import {getRepository} from 'typeorm';
import Product from '../models/Product';
import CreateProduct from '../services/CreateProduct';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
    const productsRepository = getRepository(Product);

    const products = await productsRepository.find();

    return response.json(products);
})

productsRouter.post('/', async (request, response) => {
    const {name, description, price, image} = request.body;

    const createProduct = new CreateProduct();

    const product = await createProduct.execute({
        name,
        description,
        price,
        image
    })

    return response.json(product);
})


export default productsRouter;