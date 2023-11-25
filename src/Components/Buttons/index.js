import react from 'react';
import {FaEdit,FaTrash, FaPlusCircle} from 'react-icons/fa'
import {MdClose,MdPrint} from 'react-icons/md'
const Buttons = (props)=>{
    return(
        <>
        {props.type =='edit'? <>
        <FaEdit onClick={props.action} color='#09A26C' style={{cursor:'pointer'}}/>
        </> : 
        props.type =='delete'? <>
        <FaTrash onClick={props.action} color='#C70039 ' style={{cursor:'pointer'}}/>
        </>: 
        props.type=='add'? <>
        <FaPlusCircle onClick={props.action} color='#0984E3' style={{cursor:'pointer'}} size={30}/>
        </>:
        props.type=='close'? <>
        <MdClose onClick={props.action} size={30} style={{cursor:'pointer'}} />
        </>:
        props.type=='print'? <>
        <MdPrint size={20} onClick={props.action} style={{cursor:'pointer'}}/>
        
        </>:
        ''}
        </>
    )
}
export default Buttons;