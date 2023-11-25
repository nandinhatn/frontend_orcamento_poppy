import react from 'react';

import {
    Container,
    ContainerContent,
    ContainerButton
} from './style'
import {useNavigate} from 'react-router-dom'


import ButtonDefault from '../ButtonsDefault';


const Home =()=>{
    const navigate = useNavigate();
    return(
        <>
        <Container>
            <ContainerContent>
                Clientes
                <ContainerButton>

                <ButtonDefault action={()=>{ navigate('/clientes')}} title="Entrar"/>
                </ContainerButton>
            </ContainerContent>
            <ContainerContent>
               Orçamento
                <ContainerButton>
                
                <ButtonDefault action={()=> {navigate('/orcamentos')}} title="Entrar"/>
                </ContainerButton>
            </ContainerContent>
        </Container>

        </>
    )
}

export default Home;