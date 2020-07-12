import React, {useState, useEffect} from 'react';
import {Header, LogoS, Container, Options, Btn, DropContainer, Photo, Input} from './styles';
import Logo from '../../assets/logo2.png';
import DropZone from 'react-dropzone';
import api from '../../services/api'
import {toast} from 'react-toastify';
import {useHistory, Link, useRouteMatch} from 'react-router-dom';

interface Params{
    ID:string;
}

const EditProduct: React.FC = () => {
    const history = useHistory();
    const [image, setImage] = useState(require('../../assets/empty.jpg'));
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const { params } = useRouteMatch<Params>();

    useEffect(() => {
        api.get(`/products/product/${params.ID}`).then(response => {
            setImage(response.data.image)
            setName(response.data.name)
            setDescription(response.data.description)
            setPrice(response.data.price)
        }
        )
    },[params.ID])

    function handleImage(files): void {
        api
          .post('https://api.imgur.com/3/image', files[0], {
            headers: { Authorization: 'Client-ID ca64990ee99e8d7' },
          })
          .then((response) => setImage(response.data.data.link));
      }

    function handleEditProduct(){
        api.patch(`/products/${params.ID}`, {
            name,
            description,
            price,
            image
        }).then(response => {
            toast.info('Produto editado com sucesso', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              })
              
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
        <Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Titulo" />
        <Input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" />
        <Input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Preço" />
        <Btn onClick={handleEditProduct}>Cadastrar</Btn>
        </Container>
     </>
    )
}

export default EditProduct;