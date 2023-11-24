import react, {useContext, useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import {MyContext} from '../../MyContext'
import Logo from '../../Assets/logopoppyalta-copy.png'
import api from '../Data/dates'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import {
    Container, 
    ContainerHeader,
    ContainerLogo,
    ContainerNumber,
    NumberOrc,
    ImageLogo,
    ContainerContent, 
    ContainerOrcamento,
    ContainerValues
} from './style'
const Imprimir= ()=>{
    const {id} = useParams()
    const navigate = useNavigate()
    const {login ,setLogin} = useContext(MyContext)
    const [orcamento, setOrcamento] = useState();

    const getOrcamento = ()=>{
        api.get(`/api/orcamento/${id}`, {headers:{'x-access-token': login.token}}).catch((e)=>{
            console.log(e)
        }).then((res)=> {
            console.log(res)
            setOrcamento(res.data.response[0])
        })
        
    }
    useEffect(()=>{
        getOrcamento()
    },[])
    return(
        <>
        {orcamento?
         <>
         <Container>
            <ContainerHeader>
            <ContainerLogo>
                <ImageLogo src={Logo}/>
            </ContainerLogo>
            <ContainerNumber>
                Orçamento n.º
                <NumberOrc>
                400{orcamento.id_job}
                </NumberOrc>
         
            </ContainerNumber>
            </ContainerHeader>
            <ContainerContent>
                <ContainerOrcamento>

                </ContainerOrcamento>
               <div>Empresa</div> :
               <div>Dado da empresa</div>
               <div>CNPJ</div>
               <div>DadoCNPJ</div>
               <div>Escopo do Projeto</div>
               <div>Descrição do Projeto</div>
               <div>Data de Entrega</div>
               <div>dados da data de entrega</div>
               <div>Valorees</div>
            </ContainerContent>
           </Container>
        
        </> :''}
       
        </>
    )
}

export default Imprimir;