import {getRepository} from 'typeorm';
import Product from '../models/Product';

interface Request{
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;  
}

class UpdateProduct{
    public async execute({id, name, description, price, image}: Request): Promise<void>{
        const productsRepository = getRepository(Product);

        await productsRepository.update(id,{
            name,
            description,
            price,
            image
        })
    }
}

export default UpdateProduct;