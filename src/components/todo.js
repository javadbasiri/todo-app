import React,{useState,useEffect} from "react";
import "./todo.css"

const Todo =({todo ,todos ,setTodos})=>{

    const [show , setShow] = useState(false)
    const [edit , setEdit] = useState(false)
    const [updateTask , setUpdateTask] = useState({title:"",description:""})
    const [color , setColor] = useState("")

    const completeHandler=(e)=>{
        if(e.target.checked){
            setTodos(todos.map(item =>{
                if(item.id === todo.id){
                    return{
                        ...item,
                        completed:true
                    }
                }else{
                    return item;
                }
            }))
        }else{
            setTodos(todos.map(item =>{
                if(item.id === todo.id){
                    return{
                        ...item,
                        completed:false
                    }
                }else{
                    return item;
                }
            }))
        }
    }

    const deleteHandler=()=>{
        setTodos(todos.map(item =>{
            if(item.id === todo.id){
                return{
                    ...item,
                    delete:true
                }
            }else{
                return item
            }
        }))
        setTimeout(()=>{
            setTodos(todos.filter(item=>item.id !== todo.id))
        },500)
    }

    const editHandler =()=>{
        if(updateTask.title !== "" || updateTask.description !== ""){
           const update=todos.map(item => {
                if(item.id === todo.id){
                    return{
                        ...item,
                        title:updateTask.title ? updateTask.title.toUpperCase() : item.title,
                        description:updateTask.description ? updateTask.description : item.description
                    }
                    
                }else{
                    return item
                }
            })
            setTodos(update)
        }
        setEdit(false)
    }


    

    return(
        <>
        <div style={{background:todo.color}} className={todo.delete ? "todo-container deleted" : show ? "todo-container show" : "todo-container" }>
            <div className="header">
                <div className="todo-title">
                    <label>
                        <input className="check-input" onClick={completeHandler} type="checkbox"/>
                        <span className={todo.completed ? "checked checkbox" : "checkbox"}></span>
                    </label>
                    <li className={todo.completed ? "completed" : ""}>{todo.title}</li>
                </div>
                <div className="edit">
                    {todo.description && 
                         <i onClick={()=>setShow(!show)} className={show ? "fa-solid fa-angle-down angle" : "fa-solid fa-angle-down"}></i>
                    }
                    <i onClick={()=>setEdit(true)} className="fa-solid fa-pen-to-square"></i>
                    <i onClick={deleteHandler} className="fa-solid fa-trash-can"></i>
                </div>
            </div>
            {todo.description &&
                <div className="details">
                    <p>{todo.description}</p>
                </div>
            }    
        </div>
        {edit &&
            <div className="modal">
            <div className="title">
                <input type="text" 
                placeholder={todo.title} 
                value={updateTask.title}
                onChange={(e)=>setUpdateTask({...updateTask,title:e.target.value})}
                />
            </div>
            <div className="des">
                <input 
                type="text" 
                placeholder={todo.description ? todo.description : "Description"}
                value={updateTask.description}
                onChange={(e)=>setUpdateTask({...updateTask,description:e.target.value})}
                
                />
            </div>
            <div className="buttons">
                <button onClick={editHandler} className="add" >UPDATE</button>
                <button onClick={()=>setEdit(false)} className="cancel">CANCEL</button>
            </div>
        </div>
        }
        </>
    )
}

export default Todo;
