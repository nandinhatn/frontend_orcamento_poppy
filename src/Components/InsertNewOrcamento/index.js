import react,{useContext, useState, useEffect} from 'react';
import {MyContext} from '../../MyContext'
import {FormInsert, Input,ContainerTitle} from './style'
import api from '../Data/dates'
import {useNavigate} from 'react-router-dom'


const InsertNewOrcamento = (props)=>{

    const {login ,setLogin} = useContext(MyContext)
    const [clientName,setClientName] = useState('') 
    const [colaborators,setColaborators] = useState('') 
    const [datePayment,setDatePayment] = useState('') 
    const [description,setDescription] = useState('') 
    const [dispute,setDispute] = useState(false) 
    const [entry_date,setEntryDate] = useState('') 
    const [deliveryDate,setDeliveryDate] = useState('') 
    const [integralValue,setIntegralValue] = useState('') 
    const [minValue,setMinValue] = useState('') 
    const [projectName, setProjectName] = useState('') 
    const [sucessValue, setSucessValue] = useState('') 
    const [listClients, setListClients] = useState('')
    const [approved, setApproved] = useState(false)
    const [win, setWin] = useState(false)
    
    const navigate= useNavigate();
    const newClient= ()=>{
        if(login.auth){
            api.post('/api/clients', {client_name: name, cnpj:cnpj, email:email}, {headers:{ 'x-access-token': `${login.token}`}}).catch((e)=>{
                console.log(e)
            }).then((res)=>{
                console.log(res)
                
                if(res.status===200){
                    console.log('inserido com sucesso')
                    props.getClients()
                 
                }
            })
        }
        else{
            navigate('/login')

        }
        
      
    }

    const getClients= ()=>{
        api.get('/api/clients', {headers: {'x-access-token': login.token}}).catch((e)=>{
            console.log((e))
            
        }).then((res)=> {
         setListClients(res.data.response) 
            console.log(res)})
    }
    useEffect(()=>{
        getClients()
    },[])
    
    return(
        <>
            <FormInsert>
                <ContainerTitle>Inserir Orçamento</ContainerTitle>
Nome do Cliente:
<select onClick={(e)=> setClientName(e.target.value)}>
        {listClients.length>0? 
        
        <>
        {listClients.map((el)=>{
            return(
                <>
                <option value={el.id_clients}>{el.client_name}</option>
                </>
            )
        })}
        </> 
        :''}
  
</select>

<Input value={projectName} onChange={(e)=> setProjectName(e.target.value)} placeholder='Nome do Projeto'/>
<Input value={colaborators} onChange={(e)=> setColaborators(e.target.value)} placeholder='Colaborador' />
Data de Entrada:
<Input type='date'value={entry_date} onChange={(e)=> setEntryDate(e.target.value)} placeholder='Data de Entrada' />
Data de Pagamento :
<Input type='date'value={datePayment} onChange={(e)=> setDatePayment(e.target.value)} placeholder='Data de Pagamento' />
Data de Entrega:
<Input type='date' value={deliveryDate} onChange={(e)=> setDeliveryDate(e.target.value) }/>
Descrição do Job:
<textarea value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
Concorrência:
<input type='checkbox' value={dispute} onChange={(e)=> setDispute(e.target.value)} />
<Input value={integralValue} onChange={(e)=> setIntegralValue(e.target.value)} placeholder='Valor do Job Integral'/>
<Input value={minValue} onChange={(e)=> setMinValue(e.target.value)} placeholder='Valor Job Mínimo'/>
<Input value={sucessValue} onChange={(e)=> setSucessValue(e.target.value)} placeholder='Valor do Job Máximo'/>
Orçamento Aprovado?
<Input type="checkbox" value={approved} onChange={(e)=> setApproved(e.target.value)} />
Concorrência venceu?
<Input type="checkbox" value={win} onChange={(e)=> setWin(e.target.value)} />
<button onClick={()=> newClient()} > Insert</button>
</FormInsert>
        </>
    )
}
export default InsertNewOrcamento;