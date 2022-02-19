import React from "react";
import "./todo.css"
const Todo =({ text,todo ,todos,setTodos})=>{
  
    const deleteHandler=()=>{
        setTodos(todos.map(item=>{
            if(item.id === todo.id){
                return{
                    ...item,del:true
                }
            }return item
        }))
        setTimeout(()=>{
            setTodos(todos.filter(item => item.id !== todo.id))
        },500)
          
    }


    const completeHandler=()=>{
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return{
                    ...item,completed:!item.completed
                }
            }return item;
        }))
       
    }

    return(
        <div className={`${todo.del ? "todo fall" : "todo"}`}>
            <li className={`${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;