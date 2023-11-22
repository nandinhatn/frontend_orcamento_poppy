import react from 'react';
import Logo from '../../Assets/logopoppyalta-copy.png'
import Logo1 from '../../Assets/poppy-icone.png';
import {Container, Li,Menu,Ul, ImageLogo,ContainerLogo} from './style'
import {useNavigate} from 'react-router-dom'
import api from '../Data/dates'
const HeaderTop =()=>{

    const navigate = useNavigate()
    const logout=()=>{
        api.post('/logout').then((res)=> {
            
            console.log(res)
            localStorage.clear()
            navigate('./login')
        }
           
            )
    }
    return(
        <>
        <Container>

        
        <ContainerLogo>

        <ImageLogo src={Logo1}/>
        </ContainerLogo>
        
        <Menu>
            <Ul>
            
                <Li>Clientes</Li>
                <Li>Orçamento</Li>
                <Li onClick={()=>logout()}>Sair</Li>
            </Ul>
        </Menu>
        </Container>
        </>
    )
}

export default HeaderTop;