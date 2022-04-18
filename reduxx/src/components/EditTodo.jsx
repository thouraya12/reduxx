import React, { useState } from 'react';
import { Modal , Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
 import {updateTodo} from '../redux/Action/Index'
const EditTodo = ( {todo}) => {
    const[show , setShow] =useState(false);
    const [updatedText , setUpdatedText ]=useState({})
    const handleChange =e=>{
        setUpdatedText(e.taget.value)
    }
    const dispatch=useDispatch()
const handleSubmit=()=>{
    dispatch(updateTodo({
    id : todo.id ,
    description : updatedText
    }))
    handleClose()
};

    const handleClose = ()=> setShow(false);
    const handleShow = ()=>  setShow(true);
  return (
    <div>
        <button variant="warning" onClick={handleShow}> 
        <i className="fas fa-edit fa-2x"></i>
        </button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title> update your todo </Modal.Title>
        </Modal.Header>
        <input
        type="text"
        onChange={handleChange}
        defaultValue={todo.description}
        
         />
         <Modal.footer>
             <button variant="secondary" onClick={handleClose}> Close</button>
             <button variant="primary" onClick={handleSubmit}> save changes</button>

         </Modal.footer>
         </Modal>
    </div>
  );
};
export default EditTodo