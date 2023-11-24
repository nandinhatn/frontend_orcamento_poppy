import react,{useContext, useState, useEffect} from 'react';
import {MyContext} from '../../MyContext'
import {FormInsert, Input,ContainerTitle} from './style'
import api from '../Data/dates'
import {useNavigate, useParams} from 'react-router-dom'
import { MdAppRegistration } from 'react-icons/md';


const UpdateOrcamento = (props)=>{

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
    const [orcamento, setOrcamento] = useState()
    const {id}  = useParams()  
    const [msg, setMsg] = useState()
    const navigate= useNavigate();
    const updateOrcamento= ()=>{
        if(login.auth){
            api.put(`/api/orcamento/${id}`, {
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
                    setMsg("Orçamento alterado com sucesso")
                  
                 
                }
            })
        }
        else{
            navigate('/login')

        }
        
      
    }

    const getOrcamento=()=>{
        api.get(`/api/orcamento/${id}`,{headers:{'x-access-token': login.token}}).catch((e)=>{
            console.log(e)
        }).then((res)=>{
            console.log(res)
            setOrcamento(res.data.response[0])
            setClientId(res.data.response[0].client_id)
            setColaborators(res.data.response[0].colaborators)
            setDatePayment(res.data.response[0].date_payment)
            setDeliveryDate(res.data.response[0].delivery_date)
            setDescription(res.data.response[0].description)
            setDataEvento(res.data.response[0].date_evento)
            setDispute(res.data.response[0].dispute)
            setEntryDate(res.data.response[0].entry_date)
            setIntegralValue(res.data.response[0].integral_value)
            setMinValue(res.data.response[0].min_value)
            setProjectName(res.data.response[0].project_name)
            setSucessValue(res.data.response[0].sucess_value)
            setWin(res.data.response[0].win)
            setApproved(res.data.response[0].approved) 
        })
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
        getOrcamento()
    },[])

    useEffect(()=>{

       /*  if(orcamento){
            setClientId(orcamento.client_id)
            setColaborators(orcamento.colaborators)
            setDatePayment(orcamento.date_payment)
            setDeliveryDate(orcamento.delivery_date)
            setDescription(orcamento.description)
            setDataEvento(orcamento.date_evento)
            setDispute(orcamento.dispute)
            setEntryDate(orcamento.entry_date)
            setIntegralValue(orcamento.integral_value)
            setMinValue(orcamento.min_value)
            setProjectName(orcamento.project_name)
            setSucessValue(orcamento.sucess_value)
            setWin(orcamento.win)
            setApproved(orcamento.approved) 
        } */
        
    /*     
       
       
        
       
        */
        console.log(orcamento)
    },[orcamento])

    useEffect(()=>{
        console.log(win) 
    },[win])
    
    const formatDate=(data)=>{  
      
        const date = new Date(data);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear()

        console.log(day + "," + month + ", " + year )
        
        const dateFormated = `${year}-${month}-${day}`
        console.log(dateFormated)
       
        return dateFormated
    }
    return(
        <>
            <FormInsert>
                <ContainerTitle>Alterar Orçamento</ContainerTitle>
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
<Input type='date'value={formatDate(entry_date)} onChange={(e)=> setEntryDate(e.target.value)} placeholder='Data de Entrada' />
Data de Pagamento :
<Input type='date'value={formatDate(datePayment)} onChange={(e)=> setDatePayment(e.target.value)} placeholder='Data de Pagamento' />
Data de Entrega:
<Input type='date' value={formatDate(deliveryDate)} onChange={(e)=> setDeliveryDate(e.target.value) }/>
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
<Input type="date" value={formatDate(dataEvento)} onChange={(e)=> setDataEvento(e.target.value)}/>
</> 
: ''}

</>
: <Input value={integralValue} onChange={(e)=> setIntegralValue(e.target.value)} placeholder='Valor do Job Integral'/>}



Orçamento Aprovado?
<Input type="checkbox" checked={approved} onChange={(e)=> setApproved(!approved)} />




<button onClick={()=> updateOrcamento()} > Alterar Orçamento</button>
<button onClick={()=> navigate('/orcamento')} > Voltar</button>
</FormInsert>
<p>{msg}</p>
        </>
    )
}
export default UpdateOrcamento;