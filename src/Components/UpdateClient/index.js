import react,{useContext, useState, useEffect} from 'react';
import {MyContext} from '../../MyContext'
import {FormInsert, Input,ContainerTitle} from './style'
import api from '../Data/dates'
import {useNavigate, useParams} from 'react-router-dom'


const UpdateClient = (props)=>{
   
    
    const {login ,setLogin} = useContext(MyContext)
    const [name,setName] = useState() 
    const [cnpj, setCnpj] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const navigate= useNavigate();
    const [clientSelected, setClientSelected] = useState([])
    const [client, setClient] = useState([])
    const {id} = useParams()
    const [msg, setMsg] = useState('');
    const updateClient= ()=>{
        if(login.auth){
            api.put(`/api/clients/${id}`, {client_name: name, cnpj:cnpj, email:email, address: address}, {headers:{ 'x-access-token': `${login.token}`}}).catch((e)=>{
                console.log(e)
            }).then((res)=>{
                
                if(res.status===200){
                    console.log('alterado com sucesso')
                    setMsg("Alterado com sucesso")
                    
                 
                }
            })
        }
        else{
            navigate('/login')

        }
        
      
    }

    const getClients=()=>{
        if(login.auth){
            api.get(`api/clients/${id}`, {headers: {'x-access-token': login.token}}).then((res)=>{
                setClientSelected(true)
                setClient(res.data.response[0])
                
                
            }).catch((e)=> console.log(e))
        }
    }
    useEffect(()=>{
      
        getClients()
       
    },[])
    useEffect(()=>{
        setName(client.client_name)
        setCnpj(client.cnpj)
        setEmail(client.email)
        setAddress(client.address)

    },[client])
    
    return(
        <>
            <FormInsert>
                <ContainerTitle>Alterar  Cliente- </ContainerTitle>
{clientSelected? 
<>
<Input value={name} onChange={(e)=> setName(e.target.value)} placeholder='Insira o nome do cliente' />
<Input value={cnpj} onChange={(e)=> setCnpj(e.target.value)} placeholder='Insira o CNPJ' />
<Input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Insira o Email' />
<Input value={address} onChange={(e)=> setAddress(e.target.value)} placeholder='Insira endereço' /> 
</> :''}

</FormInsert>

<button onClick={()=> updateClient()} > Alterar Cliente</button>
<button onClick={()=>  navigate('/clientes')} > Voltar</button>
<p>{msg}</p>
        </>
    )
}
export default UpdateClient;