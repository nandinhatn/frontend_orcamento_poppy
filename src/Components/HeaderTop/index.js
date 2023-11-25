import react,{useContext, useState} from 'react';
import Logo from '../../Assets/logopoppyalta-copy.png'
import Logo1 from '../../Assets/poppy-icone.png';
import {Container, Li,Menu,Ul, ImageLogo,ContainerLogo} from './style'
import {useNavigate} from 'react-router-dom'
import api from '../Data/dates'
import {MyContext}  from '../../MyContext'
const HeaderTop =()=>{

    const navigate = useNavigate()
    const {login, setLogin} = useContext(MyContext)
    const logout=()=>{
        api.post('/logout').then((res)=> {
            
            console.log(res)
            setLogin(res.data)
            localStorage.clear()

            navigate('./login')
        }
           
            )
    }
    console.log(login)
    return(
        <>
        {login && login.auth==true ?

        <>
          <Container>

        
<ContainerLogo>

<ImageLogo src={Logo1}/>
</ContainerLogo>

<Menu>
    <Ul>
    
        <Li onClick={()=> navigate('/clientes')}>Clientes</Li>
        <Li onClick={()=> navigate('/orcamentos')}>Orçamento</Li>
        <Li onClick={()=>logout()}>Sair</Li>
    </Ul>
</Menu>
</Container>
        </>
        
        :''}
      
        </>
    )
}

export default HeaderTop;