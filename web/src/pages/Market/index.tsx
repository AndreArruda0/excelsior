import React from 'react';
import {Header, LogoS} from './styles';
import Logo from '../../assets/logo2.png';

const Market: React.FC = () => {
    return (
        <Header>
            <LogoS src={Logo} alt="Logo" />
        </Header>
    )
}

export default Market;