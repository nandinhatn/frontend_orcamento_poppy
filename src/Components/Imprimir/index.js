import react, {useContext, useEffect, useState, useRef} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import {MyContext} from '../../MyContext'
import Logo from '../../Assets/logopoppyalta-copy.png'
import api from '../Data/dates'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import SignatureCanvas from 'react-signature-canvas'
import generatePDF, { Options } from "react-to-pdf";
import {
    Container, 
    ContainerHeader,
    ContainerLogo,
    ContainerNumber,
    NumberOrc,
    ImageLogo,
    ContainerContent, 
    ContainerOrcamento,
    ContainerValues,
    Title,
    ContainerSignatures,
    ContainerSignaturesName,
    ContainerButtons,
    ContainerAddress
} from './style'


import ButtonDefault from '../ButtonsDefault';
  
const Imprimir= ()=>{
    const {id} = useParams()
    const navigate = useNavigate()
    const {login ,setLogin} = useContext(MyContext)
    const [orcamento, setOrcamento] = useState();
    const [client, setClient] = useState()
    const [fileName, setFileName] = useState()

    const sigRef = useRef();
    const [signature, setSignature] = useState(null);
  const handleSignatureEnd = () => {
    setSignature(sigRef.current.toDataURL());
  }

  const  options = {
    filename: ""+fileName + ".pdf",
    page: {
      margin: 20,
      format:'A4'
    }
  };
  const getTargetElement = () => document.getElementById("container");

  const downloadPdf = () => generatePDF(getTargetElement, options);
  const clearSignature = () => {
    sigRef.current.clear();
    setSignature(null);
  }

    const getOrcamento = ()=>{
        console.log(login.token)
        console.log(login)
        api.get(`/api/orcamento/${id}`, {headers:{'x-access-token': login.token}}).catch((e)=>{
            console.log(e)
            navigate('/login')
        }).then((res)=> {
             console.log(res)
           
           
                console.log(res)
                setOrcamento(res.data.response[0])
            
            
        })
        
    }
    const getClients = (id)=>{
        api.get(`/api/clients/${id}`,{headers:{'x-access-token': login.token}}).catch((e)=>{
         
            if(e.request.status===500){
                console.log('aqui esta errado')
                navigate('/login')
                return
                
            }
        }).then((res)=>{
         
            setClient(res.data.response[0])
        })
    }
    const formatDate = (date)=>{
            console.log(date)
            const newDate= new Date(date)
            const day = newDate.getUTCDate()
            console.log(day)
            const month = newDate.getMonth()+1 
            console.log(month)
            const year = newDate.getFullYear()

            return `${day}/${month}/${year}`
    }

    useEffect(()=>{
        getOrcamento()
    },[])
    useEffect(()=>{
        if(orcamento){
           

            getClients(orcamento.client_id)
        }
    },[orcamento])

    useEffect((el)=>{
        if(client){
            setFileName(`"${client.client_name}_${orcamento.project_name}_${orcamento.entry_date}.pdf"`)
        }
        
       
    },[client])

    
    return(
        <>
        {login.auth? <>
            {orcamento?
         <>
         <div id="container">
         <Container>
            <ContainerHeader>
            <ContainerLogo>
                <ImageLogo src={Logo}/>
            </ContainerLogo>
            <ContainerAddress>
                Poppy Web e 3d Ltda.<br></br>
                fernanda@poppymidia.com.br<br></br>
                www.poppymidia.com.br
                <br></br>
                Telefone: 1196974-8216
            </ContainerAddress>
            <ContainerNumber>
            Orçamento n.º
                <NumberOrc>
             
                {orcamento.id_job}
                </NumberOrc>
         
            </ContainerNumber>
            </ContainerHeader>
            <ContainerContent>
                <ContainerOrcamento>
                <div>Empresa</div> 
               <ContainerValues>{client ? <>
               {client.client_name}
               </> : ''}</ContainerValues>
               <div>CNPJ</div>
               <ContainerValues>{client? 
               <>
               {client.cnpj}
               </>
               :
               ''
            }</ContainerValues>
                <div>Nome do Projeto</div>
                <ContainerValues>{orcamento.project_name}</ContainerValues>
               <div>Escopo do Projeto</div>
               <ContainerValues>{orcamento.description}</ContainerValues>
               <div>Data de Entrega</div>
               <ContainerValues>{formatDate(orcamento.delivery_date)}</ContainerValues>
             
                </ContainerOrcamento>

               
              
                <Title>Valores</Title>
                <ContainerOrcamento>
                {!orcamento.dispute? <>
                    <div>Valor Integral</div> 
               <ContainerValues>R${orcamento.integral_value.toFixed(2)}</ContainerValues>
                
                </> : <>
                <div>Valor Mínimo</div>
                <ContainerValues>R${orcamento.min_value.toFixed(2)}</ContainerValues>
                <div>Valor Máximo</div>
                <ContainerValues>R${orcamento.sucess_value.toFixed(2)}</ContainerValues>
                
                </>}
                <div>Data de Pagamento</div>
                <ContainerValues>{formatDate(orcamento.date_payment)}</ContainerValues>
               
                </ContainerOrcamento>
            </ContainerContent>

            <ContainerContent>
                <div> 1. Obs: O orçamento é válido por 15 dias</div>
                <div> 2. O prazo definido nesta proposta é válido para data atual</div>
                <div> 3. Após 7 dias da entrega do projeto, alterações e revisões estarão sujeitas a cobranças adicionais</div>
            </ContainerContent>
            <div>
                <ContainerSignatures>
                    <div >

                    
                <SignatureCanvas 
                
      penColor="black"
      canvasProps={{className: 'signature'}}
      ref={sigRef}
      onEnd={handleSignatureEnd}
    /></div>
    <ContainerSignaturesName>
        {login.results[0].name}


    </ContainerSignaturesName>
                </ContainerSignatures>
          
            
            </div>
            
           </Container>
          
           </div>
        </> :''}
        {orcamento? <>
            <ContainerButtons>
            <ButtonDefault title={"Donwlod Orçamento PDF"} action={downloadPdf}/>
        <ButtonDefault title={"Limpar Assinatura"} action={()=>clearSignature()}/>
        </ContainerButtons>
        </>: ''}
      
                
        </> : ''}
    
       
       
        </>
    )
}

export default Imprimir;