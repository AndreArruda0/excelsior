import styled from 'styled-components';
import {shade} from 'polished';

export const Header = styled.div`
    background: #FF002B;
    height: 200px;
    text-align:center;
`;

export const LogoS = styled.img`
    width: 647px;
    background: #FFFFFF;
    border-radius:10px;
    box-shadow: 0px 3px 6px #00000029;
    margin-top:100px;
`;

export const Container = styled.div`
    margin-top:100px;
    margin-left:100px;
    margin-right:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Options = styled.div``;

export const Btn = styled.button`
    background:#FF0000;
    border:0;
    color:#FFFF;
    padding:12px;
    border-radius:10px;
    margin-left:12px;
    transition: background-color 0.2s;

    &:hover{
        background: ${shade(0.3, '#FF0000')};
    }
`;

export const Product = styled.div`
    margin-top:12px;
    box-shadow: 0px 3px 6px #00000029;
    border:1px solid #00000029;
    width:400px;
    height:100px;
    display:flex;
    align-items:center;
    transition:transform 0.2s;
    justify-content:center;
    border-radius:10px;

    &:hover{
        transform: scale(1.1);
    }
`;

export const Image = styled.img`
    height:90px;
    max-width:90px;
`;

export const Title = styled.div`
    margin-bottom:12px;
    background:#CCCCCC;
    border-radius:10px;
    padding:8px;
    width:200px;
`;

export const Infos = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:12px;
`;

export const Btns = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:24px;
`;

export const BtnS = styled.button`
    background:#FF0000;
    border:0;
    border-radius:10px;
    padding:4px;
    margin-bottom:8px;
    transition: background-color 0.2s;

    &:hover{
        background: ${shade(0.3, '#FF0000')};
    }

`;