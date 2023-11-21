import react from 'react';
import Logo from '../../Assets/logopoppyalta-copy.png'
import Logo1 from '../../Assets/poppy-icone.png';
import {Container, Li,Menu,Ul, ImageLogo,ContainerLogo} from './style'
const HeaderTop =()=>{
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
                <Li>Sair</Li>
            </Ul>
        </Menu>
        </Container>
        </>
    )
}

export default HeaderTop;