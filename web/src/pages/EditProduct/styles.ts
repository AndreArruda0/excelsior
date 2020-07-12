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
    margin-top:12px;

    &:hover{
        background: ${shade(0.3, '#FF0000')};
    }
`;

export const DropContainer = styled.div`
    border-radius:50%;
    width: 226px;
    height: 218px;
    margin-top:12px;
`;

export const Photo = styled.img`
    width: 226px;
    height: 218px;
    box-shadow: 0px 3px 6px #00000029;
`;

export const Input = styled.input`
    margin-top:12px;
    border:0px;
    background:#CCCCCC;
    height:40px;
    width:500px;
    border-radius:10px;
    padding-left:12px;
`;