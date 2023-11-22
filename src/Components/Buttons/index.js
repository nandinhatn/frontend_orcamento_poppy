import react from 'react';
import {FaEdit,FaTrash} from 'react-icons/fa'

const Buttons = (props)=>{
    return(
        <>
        {props.type =='edit'? <>
        <FaEdit onClick={props.action} color='green' style={{cursor:'pointer'}}/>
        </> : 
        props.type =='delete'? <>
        <FaTrash onClick={props.action} color='red' style={{cursor:'pointer'}}/>
        </>:''}
        </>
    )
}
export default Buttons;