import {Router} from 'express';
import {getRepository} from 'typeorm';
import Product from '../models/Product';
import CreateProduct from '../services/CreateProduct';
import UpdateProduct from '../services/UpdateProduct';

const productsRouter = Router();

productsRouter.get('/product/:ID', async (request, response) => {
    //Captura do ID da URL da requisição.
    const {ID} = request.params;

    //Inicia o repositorio da classe Produto.
    const productsRepository = getRepository(Product);

    //Procura o registro na tabela com o ID informado.
    const product = await productsRepository.findOne({where:{ID}})

    //Retorna o produto
    return response.json(product);
})

productsRouter.get('/', async (request, response) => {
    //Inicia o repositorio da classe Produto.
    const productsRepository = getRepository(Product);

    //Lista todos os produtos de dentro da tabela.
    const products = await productsRepository.find();

    //Retorna os produtos
    return response.json(products);
})

productsRouter.post('/', async (request, response) => {
    //Captura as variaveis de dentro da requisição.
    const {name, description, price, image} = request.body;

    //Chama a classe de criar produto.
    const createProduct = new CreateProduct();

    //Cria o produto e armaneza no banco de dados.
    const product = await createProduct.execute({
        name,
        description,
        price,
        image
    })

    return response.json(product);
})

productsRouter.delete('/:id', async (request, response) => {
    //Captura do ID da URL da requisição.
    const {id} = request.params;

    //Inicia o repositorio da classe Produto.
    const productsRepository = getRepository(Product);

    //Deleta o produto do banco de dados.
    await productsRepository.delete(id);

    //Retorna uma menssagem para o usuario.
    return response.json({message:'Produto deletado com sucesso'});

})

productsRouter.patch('/:id', async (request, response) => {
    //Captura o ID da URL da requisição.
    const {id} = request.params;

    //Captura as variaveis de dentro da requisição.
    const {name, description, price, image} = request.body;

    //Chama a classe de atualizar o produto.
    const updateProduct = new UpdateProduct();

    //Atualiza o produto.
    await updateProduct.execute({
        id, name, description, price, image
    })

    //Retorna uma menssagem para o usuario.
    return response.json({message:'Produto atualizado com sucesso'});
})


export default productsRouter;