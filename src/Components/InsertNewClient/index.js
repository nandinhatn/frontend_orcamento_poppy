import react,{useContext, useState, useEffect} from 'react';
import {MyContext} from '../../MyContext'
import {FormInsert, Input,ContainerTitle} from './style'
import api from '../Data/dates'
import {useNavigate} from 'react-router-dom'
import ButtonDefault from '../ButtonsDefault';

const InsertNewClient = (props)=>{

    const {login ,setLogin} = useContext(MyContext)
    const [name,setName] = useState('') 
    const [cnpj, setCnpj] = useState('')
    const [email, setEmail] = useState('')
    const navigate= useNavigate();
    const newClient= ()=>{
        if(login.auth){
            api.post('/api/clients', {client_name: name, cnpj:cnpj, email:email}, {headers:{ 'x-access-token': `${login.token}`}}).catch((e)=>{
             
                setLogin({})
            }).then((res)=>{
                console.log(res)
                if(res.status===200){
                    console.log('inserido com sucesso')
                    props.getClients()
                    setCnpj('')
                    setName('')
                    setEmail('')
                 
                }
            })
        }
        else{
            navigate('/login')

        }
        
      
    }
    
    return(
        <>
            <FormInsert>
                <ContainerTitle>Inserir Novo Cliente</ContainerTitle>

<Input value={name} onChange={(e)=> setName(e.target.value)} placeholder='Insira o nome do cliente' />
<Input value={cnpj} onChange={(e)=> setCnpj(e.target.value)} placeholder='Insira o CNPJ' />
<Input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Insira o Email' />
</FormInsert>


<ButtonDefault action={()=> newClient()} title="Inserir Novo Cliente"/>
        </>
    )
}
export default InsertNewClient;