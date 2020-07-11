import {getRepository} from 'typeorm';
import Product from '../models/Product';

//Crio o objeto Request que tem as tipagens dos campos da tabela.
interface Request {
    name: string;
    description: string;
    price: number;
    image: string;  
}

class CreateProduct{
    public async execute({name, description, price, image}: Request):Promise<Product>{
        if(name === '' || description === '' || image === '' ){
            throw new Error('Preencha todos os campos corretamente')
        }

        const productsRepository = getRepository(Product);

        const checkProductExists = productsRepository.findOne({where:name});

        if(checkProductExists){
            throw new Error('Já existe um produto com o nome informado')
        }

        const product = productsRepository.create({
            name,
            description,
            price,
            image
        });

        await productsRepository.save(product);

        return product;
    }
}

export default CreateProduct