import React from "react";
import {FaSignInAlt} from 'react-icons/fa'

import {Button} from './style'
const ButtonDefault = (props)=>{
    return(
        <>
        <Button  onClick={()=> props.action()}>
            {props.title=='Entrar'?   <FaSignInAlt /> : ''}
          
            {props.title}</Button>
        </>
    )
}
export default ButtonDefault;