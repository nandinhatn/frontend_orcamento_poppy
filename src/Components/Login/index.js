import react, {useState, useEffect, useContext} from 'react';
import {MyContext} from '../../MyContext'
import {Container} from './style'
import api from '../Data/dates'
import {Outlet,NavLink, useLocation, useNavigate} from 'react-router-dom'


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
              navigate('/clientes'); 
            }
            console.log(res.data)
            if(!res.data.auth) {
                console.log('login errado')
                setAnswerMsg("Login Errado")
            }
        })
            
    }

   
        
    return(
        <>
        <Container>

        <div>Login</div>
     
        

        <input placeholder='Usuario' value={user} onChange={(e)=> setUser(e.target.value)}></input>
        <input value={password} type='password' placeholder='Senha' onChange={(e)=> setPassword(e.target.value)}></input>
        {user.length>0 && password.length>0 ? <button onClick={()=>getDadosLogin()}>Logar</button> : ''}
        <p>{answerMsg}</p>
       
        
        </Container>
        </>
    )
}

export default Login;