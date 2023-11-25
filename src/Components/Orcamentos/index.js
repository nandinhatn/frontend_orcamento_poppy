import react, {useContext, useEffect, useState} from 'react';
import { MyContext } from '../../MyContext';
import api from '../Data/dates'
import { NavLink, useLocation, redirect, useNavigate } from 'react-router-dom';
import {
    Container,
    Lines, 
    Titles,
    ContainerPlus,
    ContainerTitles
} from './style'
import {FaCheck, FaPrint} from 'react-icons/fa'

import {MdClose,MdPrint} from 'react-icons/md'

import InsertNewClient from '../InsertNewClient';
import UpdateClient from '../UpdateClient';

import Buttons from '../Buttons'

import InsertNewOrcamento from '../InsertNewOrcamento';
const Orcamentos = ()=>{
    const {login ,setLogin} = useContext(MyContext)
    const [orcamento, setOrcamento] = useState([])
    const [exibInsert, setExibInsert] = useState(false)
    const [exibUpdate, setExibUpdate] = useState(false)
    const [idUpdate, setIdUpdate] = useState()
    const [clientSelected, setClientSelected] = useState()

    const [token, setToken] = useState(localStorage.getItem('bearer'))
    const navigate = useNavigate();

    function getOrcamentos(){
        if(login.auth){
            api.get('/api/orcamento',{headers:{'x-access-token': `${login.token}`}}).
     
     
            catch((e)=>{
                 
                
                  navigate('/login')
                  
               }).then((res)=> {
                   if(res){
                       setOrcamento(res.data.response)
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
    const deleteOrcamento= (id)=>{
        console.log('cliquei em delete')
        if(login.auth){
            api.delete(`/api/orcamento/${id}`,{headers:{'x-access-token': login.token}}).catch((e)=>{
                console.log(e)
            }).then((res)=> {
                getOrcamentos()
               })
        }
    }

    const formatDate=(date)=>{
        
        const data = new Date(date)
        const day = data.getDate()
        const month = data.getMonth()
        const year = data.getFullYear()

      
        if(date==="0000-00-00"){
           return '- '
        }
        else{
            return `${day}/${month}/${year}`;
        }
       
        
    }
    useEffect(()=>{
        getOrcamentos()
      
    },[])
         

    return(
        <>
        <ContainerTitles>

        <Titles>Orçamentos</Titles>
        <ContainerPlus>
        {!exibInsert? <Buttons action={()=> insertNewClient()}type="add"/> : ''}
        
        </ContainerPlus>
        {exibInsert? <>
            <ContainerPlus>

            <Buttons action={()=> setExibInsert(!exibInsert)}type="close"/>
            </ContainerPlus>
            {<InsertNewOrcamento getOrcamentos={getOrcamentos}/>}
        </> : ''}

       
        {orcamento?  <>
        
        <Container>

        <Lines>ID</Lines>
        <Lines>Nome do Projeto</Lines>
        <Lines>Data de Entrada</Lines>
        <Lines>Aprovado</Lines>
        <Lines>Data de Entrega</Lines>
        <Lines>Alterar</Lines>
        <Lines>Excluir</Lines>
        <Lines>Imprimir</Lines>
        {orcamento.map((el)=> {return(
            <>
         
            <Lines>
                {el.id_job} 
            </Lines>
            <Lines>
                {el.project_name}
            </Lines>  
            <Lines>
                {el.entry_date? formatDate(el.entry_date): ''}
               
            </Lines>
            <Lines>
                    { el.approved===0 ? <MdClose/>: <FaCheck/>}
            </Lines>
            <Lines>
               {formatDate(el.delivery_date)}
            </Lines>  
            <Lines>
            <Buttons action={()=> navigate(`/updateOrcamento/${el.id_job}`)} type={'edit'}/>
            </Lines>
            <Lines>
             <Buttons action={()=> deleteOrcamento(el.id_job)} type={'delete'}/>
            </Lines>  
            <Lines>
                <Buttons type={'print'} action={()=> navigate(`/imprimir/${el.id_job}`)}/>
               </Lines>
             </>
        )})}
          </Container>
        </>
      
        : 'nao tem'}
        <div>
           

        </div>
        </ContainerTitles>
           
      
      
       
      
        </>
    )

}
export default Orcamentos;