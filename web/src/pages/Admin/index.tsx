import React from 'react';
import {Header, LogoS, Container, Options, Btn} from './styles';
import Logo from '../../assets/logo2.png';

const Admin: React.FC = () => {
    return (
    <>
        <Header>
            <LogoS src={Logo} alt="Logo" />
        </Header>
        <Container>
            <Options>
                <Btn>Voltar</Btn>
                <Btn>Novo Produto</Btn>
            </Options>
        </Container>
    </>
    )
}

export default Admin;