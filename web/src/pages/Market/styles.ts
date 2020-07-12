import styled from 'styled-components';
import {shade} from 'polished';

export const Header = styled.div`
    background: #FF002B;
    height: 264px;
    text-align:center;
`;

export const LogoS = styled.img`
    width: 647px;
    background: #FFFFFF;
    border-radius:10px;
    box-shadow: 0px 3px 6px #00000029;
    margin-top:150px;
`;

export const Products = styled.div`
    display:flex;
    justify-content:center;
    margin-top:80px;
    flex-wrap: wrap;
    padding:20px;

    .product{
        width: 372px;
        height: 310px;
        background: #FFFFFF;
        box-shadow: 0px 3px 6px #00000029;
        border: 1px solid #FF002B;
        text-align:center;
        transition:transform 0.2s;
        margin-left:8px;
        margin-top:8px;

        &:hover{
            transform: scale(1.1);
        }


        img{
            height: 226px;
        }

        .infos{
            height: 80px;
            background: #FF002B 0% 0% no-repeat padding-box;
            color:#FFFFFF;

            .title{
                font-size:40px;
                margin-left:12px;
            }

            .price{
                float:right;
                margin-right:12px;
                font-size:25px;
            }
        }
    }
`;

export const Admin = styled.button`
    position: absolute;
    right:0;
    margin-top:280px;
    margin-right:12px;
    background:#FF0000;
    border:0px;
    color:#FFF;
    padding:12px;
    border-radius:10px;
    transition: background-color 0.2s;

    &:hover{
        background: ${shade(0.3, '#FF0000')};
    }
`;