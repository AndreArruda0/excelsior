import React from 'react';
import {Header, LogoS, Products, Admin} from './styles';
import Logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';

const Market: React.FC = () => {
    return (
        <>
            <Header>
                <LogoS src={Logo} alt="Logo" />
                <Link to="/admin"><Admin>Admin</Admin></Link>
            </Header>
            <Products>
                <div className="product">
                <img src="https://static.netshoes.com.br/produtos/casaco-pau-a-pique-moletom/06/DRH-0060-006/DRH-0060-006_zoom1.jpg" alt="casaco" />
                    <div className="infos">
                        
                        <div className="title">
                            Casasco
                        </div>
                        <div className="price">
                            R$50,00
                        </div>
                        
                    </div>
                </div>

                <div className="product">
                <img src="https://static.netshoes.com.br/produtos/casaco-pau-a-pique-moletom/06/DRH-0060-006/DRH-0060-006_zoom1.jpg" alt="casaco" />
                    <div className="infos">
                        
                        <div className="title">
                            Casasco
                        </div>
                        <div className="price">
                            R$50,00
                        </div>
                        
                    </div>
                </div>

                <div className="product">
                <img src="https://static.netshoes.com.br/produtos/casaco-pau-a-pique-moletom/06/DRH-0060-006/DRH-0060-006_zoom1.jpg" alt="casaco" />
                    <div className="infos">
                        
                        <div className="title">
                            Casasco
                        </div>
                        <div className="price">
                            R$50,00
                        </div>
                        
                    </div>
                </div>

                <div className="product">
                <img src="https://static.netshoes.com.br/produtos/casaco-pau-a-pique-moletom/06/DRH-0060-006/DRH-0060-006_zoom1.jpg" alt="casaco" />
                    <div className="infos">
                        
                        <div className="title">
                            Casasco
                        </div>
                        <div className="price">
                            R$50,00
                        </div>
                        
                    </div>
                </div>

                <div className="product">
                <img src="https://static.netshoes.com.br/produtos/casaco-pau-a-pique-moletom/06/DRH-0060-006/DRH-0060-006_zoom1.jpg" alt="casaco" />
                    <div className="infos">
                        
                        <div className="title">
                            Casasco
                        </div>
                        <div className="price">
                            R$50,00
                        </div>
                        
                    </div>
                </div>

                <div className="product">
                <img src="https://static.netshoes.com.br/produtos/casaco-pau-a-pique-moletom/06/DRH-0060-006/DRH-0060-006_zoom1.jpg" alt="casaco" />
                    <div className="infos">
                        
                        <div className="title">
                            Casasco
                        </div>
                        <div className="price">
                            R$50,00
                        </div>
                        
                    </div>
                </div>
            </Products>
        </>
    )
}

export default Market;