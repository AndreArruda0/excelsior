import React from 'react';
import {Header, LogoS, Container, Options, Btn, Product} from './styles';
import Logo from '../../assets/logo2.png';
import {Link} from 'react-router-dom';

const Admin: React.FC = () => {
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
            <Product>
                a
            </Product>
            <Product>
                a
            </Product>
        </Container>
    </>
    )
}

export default Admin;