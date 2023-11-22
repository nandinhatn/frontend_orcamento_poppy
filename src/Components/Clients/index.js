import react, {useContext, useEffect, useState} from 'react';
import { MyContext } from '../../MyContext';
import api from '../Data/dates'
import { NavLink, useLocation, redirect, useNavigate } from 'react-router-dom';
import {Container,Lines, FormInsert} from './style'
import InsertNewClient from '../InsertNewClient';
import {FaEdit,FaTrash} from 'react-icons/fa'
import Buttons from '../Buttons'
const Clients = ()=>{
    const {login ,setLogin} = useContext(MyContext)
    const [client, setClient] = useState([])
    const [exibInsert, setExibInsert] = useState(false)

    const [token, setToken] = useState(localStorage.getItem('bearer'))
    const navigate = useNavigate();

    function getClients(){
        if(login.auth){
            api.get('/api/clients',{headers:{'x-access-token': `${login.token}`}}).
     
     
            catch((e)=>{
                 
                
                  navigate('/login')
                  
               }).then((res)=> {
                   if(res){
                       setClient(res.data.response)
                       console.log(res)
                   }
                 }) 
        }
    else{
        navigate('/login')
    }
    }

    const insertNewClient = ()=>{
        setExibInsert(true)
    }
    const editClient= ()=>{
        console.log('cliquei no edit')
        
    }
    const deleteClient= (id)=>{
        console.log('cliquei em delete')
        if(login.auth){
            api.delete(`/api/clients/${id}`,{headers:{'x-access-token': login.token}}).catch((e)=>{
                console.log(e)
            }).then((res)=> {
                getClients()
                console.log(res)})
        }
    }

    useEffect(()=>{
        getClients()
      
    },[])
         

    return(
        <>
        <div>Clientes
           
        </div>

        <div onClick={()=> insertNewClient()}>Inserir novo Cliente</div>

        {exibInsert? <>
        
            {<InsertNewClient getClients={getClients}/>}
        </> : ''}
        {client?  <>
        
        <Container>

        <Lines>ID</Lines>
        <Lines>Nome</Lines>
        <Lines>CNPJ</Lines>
        <Lines></Lines>
        <Lines></Lines>
        <Lines></Lines>
        {client.map((el)=> {return(
            <>
         
            <Lines>
                {el.id_clients} 
            </Lines>
            <Lines>
                {el.client_name}
            </Lines>  
            <Lines>
                {el.cnpj}
            </Lines>
            <Lines>
            <Buttons action={()=> editClient()} type={'edit'}/>
            </Lines>  
            <Lines>

            </Lines>
            <Lines>
             <Buttons action={()=> deleteClient(el.id_clients)} type={'delete'}/>
            </Lines>  
             </>
        )})}
          </Container>
        </>
      
        : 'nao tem'}
        <div>
           

        </div>
        </>
    )

}
export default Clients;