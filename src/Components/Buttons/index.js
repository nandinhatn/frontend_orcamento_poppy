import react from 'react';
import {FaEdit,FaTrash, FaPlusCircle} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
const Buttons = (props)=>{
    return(
        <>
        {props.type =='edit'? <>
        <FaEdit onClick={props.action} color='green' style={{cursor:'pointer'}}/>
        </> : 
        props.type =='delete'? <>
        <FaTrash onClick={props.action} color='red' style={{cursor:'pointer'}}/>
        </>: 
        props.type=='add'? <>
        <FaPlusCircle onClick={props.action} color='#1E3379' size={30}/>
        </>:
        props.type=='close'? <>
        <MdClose onClick={props.action} size={30} />
        </>:
        ''}
        </>
    )
}
export default Buttons;