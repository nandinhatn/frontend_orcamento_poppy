import react,{useContext, useState, useEffect} from 'react';
import {MyContext} from '../../MyContext'
import {FormInsert, Input,ContainerTitle} from './style'
import api from '../Data/dates'
import {useNavigate} from 'react-router-dom'
import { MdAppRegistration } from 'react-icons/md';


const InsertNewOrcamento = (props)=>{

    const {login ,setLogin} = useContext(MyContext)
    const [clientId,setClientId] = useState('') 
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
    const [dataEvento, setDataEvento] = useState(false)
    const [win, setWin] = useState(false)
    
    const navigate= useNavigate();
    const newOrcamento= ()=>{
        if(login.auth){
            api.post('/api/orcamento', {
                client_id: clientId, 
                colaborators:colaborators, 
                date_payment: datePayment,
                delivery_date: deliveryDate,
                date_evento: dataEvento,
                description: description,
                dispute: dispute,
                entry_date: entry_date,
                integral_value: integralValue,
                min_value: minValue,
                project_name: projectName,
                win: win,
                approved: approved,
                sucess_value: sucessValue

            }, {headers:{ 'x-access-token': `${login.token}`}}).catch((e)=>{
                console.log(e)
            }).then((res)=>{
                console.log(res)
                
                if(res.status===200){
                    console.log('inserido com sucesso')
                    props.getOrcamentos()
                  
                 
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

    useEffect(()=>{
        console.log(win) 
    },[win])
    
    return(
        <>
            <FormInsert>
                <ContainerTitle>Inserir Orçamento</ContainerTitle>
Nome do Cliente:
<select onClick={(e)=> setClientId(e.target.value)}>
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
<textarea rows={10} value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
Concorrência:
<input type='checkbox' checked={dispute} onChange={(e)=> setDispute(!dispute)} />
{/* o valor do integral esconde */}
{dispute? 
<>

<Input value={minValue} onChange={(e)=> setMinValue(e.target.value)} placeholder='Valor Job Mínimo'/>
<Input value={sucessValue} onChange={(e)=> setSucessValue(e.target.value)} placeholder='Valor do Job Máximo'/>
Concorrência venceu?
<Input type="checkbox" checked={win} onChange={(e)=> setWin(!win)} />
{win? 
<>
Data do Evento:
<Input type="date" value={dataEvento} onChange={(e)=> setDataEvento(e.target.value)}/>
</> 
: ''}

</>
: <Input value={integralValue} onChange={(e)=> setIntegralValue(e.target.value)} placeholder='Valor do Job Integral'/>}



Orçamento Aprovado?
<Input type="checkbox" checked={approved} onChange={(e)=> setApproved(!approved)} />




<button onClick={()=> newOrcamento()} > Insert</button>
</FormInsert>
        </>
    )
}
export default InsertNewOrcamento;