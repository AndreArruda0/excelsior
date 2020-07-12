import React,{useState, useEffect} from 'react';
import {Header, LogoS, Products, Admin} from './styles';
import Logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';
import api from '../../services/api';

//Cria as tipagens do Produto
interface Product{
    ID: string;
    name: string;
    price: string;
    image: string;
}

const Market: React.FC = () => {

    //Cria uma lista para armazenas os produtos
    const [products, setProducts] = useState<Product[]>([]);

    //Faz a consulta no backend e armazena os produtos na lista.
    useEffect(() => {
        api.get('/products').then(response => setProducts(response.data))
    },[])

    return (
        <>
            <Header>
                <LogoS src={Logo} alt="Logo" />
                <Link to="/admin"><Admin>Admin</Admin></Link>
            </Header>
            <Products>
                {products.map(product => (
                    <div className="product" key={product.ID}>
                    <img src={product.image} alt="casaco" />
                        <div className="infos">
                            
                            <div className="title">
                                {product.name}
                            </div>
                            <div className="price">
                                R${product.price}
                            </div>
                            
                        </div>
                    </div>
                ))}
                

            </Products>
        </>
    )
}

export default Market;