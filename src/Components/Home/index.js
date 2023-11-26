import react,{useContext, useEffect} from 'react';

import {
    Container,
    ContainerContent,
    ContainerButton
} from './style'
import {useNavigate} from 'react-router-dom'
import { MyContext } from '../../MyContext';


import ButtonDefault from '../ButtonsDefault';


const Home =()=>{
    const navigate = useNavigate();
    const {login,setLogin} = useContext(MyContext)

     useEffect(()=>{
        if(!login.auth){
            navigate('/login')
        }
     },[login])
    return(
        <>
        {login.auth? 
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
        </> : ''}
      
     

        </>
    )
}

export default Home;