import react, {useContext, useEffect, useState} from 'react';
import { MyContext } from '../../MyContext';
import api from '../Data/dates'
import { NavLink, useLocation, redirect, useNavigate } from 'react-router-dom';
const Clients = ()=>{
    const {login ,setLogin} = useContext(MyContext)
    const [client, setClient] = useState([])

    const [token, setToken] = useState(localStorage.getItem('bearer'))
    const navigate = useNavigate();

    function getClients(){
     api.get('/api/clients',{headers:{'x-access-token': `${login}`}}).catch((e)=>{
            console.log(e.response.data.auth)
            
            if(!e.response.data.auth){
                navigate('/login')
            }
        }).then((res)=> {
            setClient(res.data.response)
            console.log(res)}) 
    }

    useEffect(()=>{
        getClients()
        console.log(login)
        console.log(client)
    },[])
         
    return(
        <>
        <div>Clientes</div>
        {client?  <>
        
        {client.map((el)=> {return(
            <div>
                {el.id_clients} - {el.client_name}
            </div>
        )})}
        </>: 'nao tem'}
        <div>
           

        </div>
        </>
    )

}
export default Clients;