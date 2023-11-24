import React from "react";

import {Button} from './style'
const ButtonDefault = (props)=>{
    return(
        <>
        <Button onClick={()=> props.action()}>{props.title}</Button>
        </>
    )
}
export default ButtonDefault;