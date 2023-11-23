import react, {useContext, useEffect, useState} from 'react';
import { MyContext } from '../../MyContext';
import api from '../Data/dates'
import { NavLink, useLocation, redirect, useNavigate } from 'react-router-dom';
import {Container,Lines, FormInsert,Titles,ContainerPlus} from './style'
import InsertNewClient from '../InsertNewClient';
import UpdateClient from '../UpdateClient';

import Buttons from '../Buttons'
const Clients = ()=>{
    const {login ,setLogin} = useContext(MyContext)
    const [client, setClient] = useState([])
    const [exibInsert, setExibInsert] = useState(false)
    const [exibUpdate, setExibUpdate] = useState(false)
    const [idUpdate, setIdUpdate] = useState()
    const [clientSelected, setClientSelected] = useState()

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
        setExibUpdate(false)
    }
  
    const editClient= (id, client)=>{
        setIdUpdate(id)
        setExibInsert(false)
        setExibUpdate(true)
        setClientSelected(client)
        
    }
    const deleteClient= (id)=>{
        console.log('cliquei em delete')
        if(login.auth){
            api.delete(`/api/clients/${id}`,{headers:{'x-access-token': login.token}}).catch((e)=>{
                console.log(e)
            }).then((res)=> {
                getClients()
               })
        }
    }

    useEffect(()=>{
        getClients()
      
    },[])
         

    return(
        <>
        <Titles>Clientes</Titles>
           
      
        <ContainerPlus>
        {!exibInsert? <Buttons action={()=> insertNewClient()}type="add"/> : ''}
        
        </ContainerPlus>
       
        {exibInsert? <>
            <ContainerPlus>

            <Buttons action={()=> setExibInsert(!exibInsert)}type="close"/>
            </ContainerPlus>
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
            <Buttons action={()=> navigate(`/updateClients/${el.id_clients}`)} type={'edit'}/>
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