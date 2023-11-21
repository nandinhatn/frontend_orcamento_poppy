import react, {useState, useEffect, useContext} from 'react';
import {MyContext} from '../../MyContext'
import {Container} from './style'



const Login = ()=>{
        const {login, setLogin} = useContext(MyContext)
        const [password, setPassword]= useState('');
        const [user,setUser] = useState('');

    const getDadosLogin = (user, password)=>{

    }
        
    return(
        <>
        <Container>

        <div>Login</div>
        <input placeholder='Usuario' value={user} onChange={(e)=> setUser(e.target.value)}></input>
        <input value={password} placeholder='Senha' onChange={(e)=> setPassword(e.target.value)}></input>
        <button>Logar</button>
        </Container>
        </>
    )
}

export default Login;