import {getRepository} from 'typeorm';
import Product from '../models/Product';

//Cria o objeto Request que tem as tipagens dos campos da tabela.
interface Request {
    name: string;
    description: string;
    price: number;
    image: string;  
}

class CreateProduct{
    public async execute({name, description, price, image}: Request):Promise<Product>{
        //Verifica se os campos estão preenchidos,
        if(name === '' || description === '' || image === '' ){
            throw new Error('Preencha todos os campos corretamente')
        }

        //Inicia o repositorio da classe Produto.
        const productsRepository = getRepository(Product);

        //Verifica se ja existe um produto com o nome.
        const checkProductExists = await productsRepository.findOne({where:{name}});

        if(checkProductExists){
            throw new Error('Já existe um produto com o nome informado')
        }

        //Cria o produto.
        const product = productsRepository.create({
            name,
            description,
            price,
            image
        });

        //Armazena o produto no banco de dados.
        await productsRepository.save(product);

        //Retorna o produto.
        return product;
    }
}

export default CreateProduct