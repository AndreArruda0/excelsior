import React, {useEffect, useState} from 'react';
import {Header, LogoS, Container, Options, Btn, Product, Image, Infos, Title, Btns, BtnS} from './styles';
import {FaTimes, FaEdit} from 'react-icons/fa';
import Logo from '../../assets/logo2.png';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import {toast} from 'react-toastify';

interface Product {
    ID: string;
    name: string;
    description: string;
    price: string;
    image: string;
}

const Admin: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [refresh, setRefresh] = useState(Date.now());

    useEffect(() => {
        api.get('/products').then(response => setProducts(response.data))
    },[refresh])

    function handleDelete(id){
        api.delete(`/products/${id}`).then(response => {
            toast.info('Produto deletado com sucesso', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              })
              setRefresh(Date.now())
              
            }
          )
    }

    return (
    <>
        <Header>
            <LogoS src={Logo} alt="Logo" />
        </Header>
        <Container>
            <Options>
                <Link to="/"><Btn>Voltar</Btn></Link>
                <Link to="/newProduct"><Btn>Novo Produto</Btn></Link>
            </Options>
            {products.map(product => (
            <Product key={product.ID}>
                 <Image src={product.image} alt="product" />
                 <Infos>
                    <Title>{product.name}</Title>
                    <Title>R$ {product.price}</Title>
                 </Infos>
                 <Btns>
                     <BtnS onClick={() => handleDelete(product.ID)}><FaTimes size={25} color="#FFFFFF" /></BtnS>
                     <Link to={`/editProduct/${product.ID}`}><BtnS><FaEdit size={25} color="#FFFFFF" /></BtnS></Link>
                 </Btns>
            </Product>
            ))}
           
        </Container>
    </>
    )
}

export default Admin;