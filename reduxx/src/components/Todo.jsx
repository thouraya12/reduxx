import React from 'react'
import { useDispatch } from 'react-redux'
import { checkTodo, deleteTodo } from '../redux/Action/Index'
import EditTodo from './EditTodo'

const Todo = ({todo , index}) => {
    // const dispatch = useDispatch()
    // const handleDone =()=>{
    //     dispatch( checkTodo({
    //         id : todo.id
    //     }))
    // }
    // const handleDelete =()=>{
    //     dispatch(deleteTodo({
    //         id : todo.id
    //     }))
    // }
  return (
    <div>
        <div key={todo.id} className="todo_failed">
            <div>

<h2 style={{textDecoration : todo.isDone ? 'line-through' : 'none'}}
> 
    {`${index+1}/- $ {todo.description}`}</h2>
            </div>
        <div className="inputt-failed">
            <button className="check" >
            <i className="fas fa-check-circle fa-2x"></i>
            </button>
            <button className="trash" > 
            <i className="fas fa-check-circle fa-2x"></i>
            </button>
            {/* <EditTodo todo= {todo}/> */}
        </div>
        </div>
        
    </div>
  )
}

export default Todo