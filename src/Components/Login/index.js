import react, {useState, useEffect, useContext} from 'react';
import {MyContext} from '../../MyContext'
import {
    Container,
    ContainerLogin,
    Input,
    ContainerIcon,
    ContainerInput,
    ContainerLogo,
    ImageLogo,
    Divisor,
    TitleLogin,
    ContainerMsg
}
     from './style'
import api from '../Data/dates'
import {Outlet,NavLink, useLocation, useNavigate} from 'react-router-dom'
import ButtonDefault from '../ButtonsDefault';
import {FaLock, FaUser} from 'react-icons/fa'
import Logo from '../../Assets/poppy-icone.png'

const Login = ()=>{
        const {login, setLogin} = useContext(MyContext)
        const [password, setPassword]= useState('');
        const [answerMsg, setAnswerMsg] = useState('')
        const [user,setUser] = useState('');
        const navigate = useNavigate();
    const getDadosLogin = (e)=>{
        
        api.post('/api/login',{login: user, password: password}).then((res)=> {
           /*  res.data.auth ? setLogin(res.data.auth) */
            if(res.data.auth){
                console.log(res)
                setLogin(res.data)
                localStorage.setItem("token", res.data.token)
              navigate('/'); 
            }
            console.log(res.data)
            if(!res.data.auth) {
                console.log('login errado')
                setLogin(res.data)
                setAnswerMsg("Login Errado")
            }
        })
            
    }

   
        
    return(
        <>
        <Container>
        <ContainerLogin>
        <ContainerLogo>
            <ImageLogo src={Logo}/>
            <Divisor></Divisor>
            <TitleLogin>Login</TitleLogin>
        </ContainerLogo>
     
        
        <ContainerInput>
            <ContainerIcon>
            <FaUser/>
            </ContainerIcon>

     <Input placeholder='Usuario' value={user} onChange={(e)=> setUser(e.target.value)}/>
        </ContainerInput>

        <ContainerInput>
        <ContainerIcon>
        <FaLock/>
</ContainerIcon>
     <Input value={password} type='password' placeholder='Senha' onChange={(e)=> setPassword(e.target.value)}/>
        </ContainerInput>
     {user.length>0 && password.length>0 ?
     <ButtonDefault title="Logar" action={()=> getDadosLogin()}/>
      : ''}

     <ContainerMsg>{answerMsg}</ContainerMsg>
        </ContainerLogin>
        
       
        
        </Container>
        </>
    )
}

export default Login;