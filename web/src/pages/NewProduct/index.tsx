import React, {useState} from 'react';
import {Header, LogoS, Container, Options, Btn, DropContainer, Photo, Input} from './styles';
import Logo from '../../assets/logo2.png';
import DropZone from 'react-dropzone';
import api from '../../services/api'
import {toast} from 'react-toastify';
import {useHistory, Link} from 'react-router-dom';

const NewProduct: React.FC = () => {
    const history = useHistory();
    const [image, setImage] = useState(require('../../assets/empty.jpg'));
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    function handleImage(files): void {
        api
          .post('https://api.imgur.com/3/image', files[0], {
            headers: { Authorization: 'Client-ID ca64990ee99e8d7' },
          })
          .then((response) => setImage(response.data.data.link));
      }

    function handleAddProduct(){
        api.post('/products', {
            name,
            description,
            price,
            image
        }).then(response => {
            toast.info('Produto cadastrado com sucesso', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              })
              history.push('/admin')
              
            }
          ).catch(error => 
            toast.error('Erro, preencha todos os campos corretamente', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              })
            )
    }

    return (
        <>
            <Header>
                <LogoS src={Logo} alt="Logo" />
            </Header>
            <Container>
            <Options>
                <Link to="/admin"><Btn>Voltar</Btn></Link>
            </Options>
            <DropZone
                accept="image/*"   
                onDropAccepted={(file) => {
                    handleImage(file);
                  }}
                  multiple={false}
            >
            {({ getRootProps, getInputProps }) => (
                <DropContainer {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Photo src={image} alt="foto" />
                </DropContainer>
            )}
        </DropZone>
        <Input type="text" onChange={e => setName(e.target.value)} placeholder="Titulo" />
        <Input type="text" onChange={e => setDescription(e.target.value)} placeholder="Descrição" />
        <Input type="number" onChange={e => setPrice(e.target.value)} placeholder="Preço" />
        <Btn onClick={handleAddProduct}>Cadastrar</Btn>
        </Container>
     </>
    )
}

export default NewProduct;