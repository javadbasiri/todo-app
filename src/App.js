import React,{useState,useEffect} from "react";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import "./app.css";
const App=()=>{

    const randomNumber = ()=>{
        const random = Math.floor(Math.random() * 10000);
        return random;
    }

    const [showModal , setShowModal] = useState(false);
    const [taskInfo , setTaskInfo] = useState({title:"",description:""})
    const [todos , setTodos] = useState([{
            title:"TODO APP",
            description:"You Can Add , Edit , Remove and Filter Tasks.",
            id:randomNumber(),
            completed:false,
            delete:false
    }])
    const [status , setStatus]=useState("")
    const [filterTodo , setFilterTodo]=useState([]) 

  

    const addHandler =()=>{
        if(taskInfo.title === "")return;
        todos.push({
            title:taskInfo.title.toUpperCase(),
            description:taskInfo.description,
            id:randomNumber(),
            completed:false,
            delete:false
        })
        setShowModal(false)
        setTaskInfo({title:"",description:""})
        console.log(todos)
    }

    const radioHandler=(e)=>{
        setStatus(e.target.value)
    }

    const filterHandler =()=>{
        switch(status){
            case "completed":
                setFilterTodo(todos.filter(item => item.completed))
                break;
            case "uncompleted":
                setFilterTodo(todos.filter(item => !item.completed))  
                break; 
            default:
                setFilterTodo(todos)
                         
        }
    }

    useEffect(()=>{
       filterHandler()
    },[todos,status])

    return(
        <>
            <div className="container">
                <h1>Get Works Done!</h1>
                <button className="add-task" onClick={()=>setShowModal(!showModal)}>
                    <i className="fa-solid fa-circle-plus"></i>
                </button>

                <Filter radioHandler={radioHandler}/>
               
                {showModal && 
                <div className="modal">
                    <div className="title">
                        <input type="text" 
                        placeholder="Title" 
                        value={taskInfo.title}
                        onChange={(event)=>setTaskInfo({...taskInfo,title:event.target.value})}
                        />
                    </div>
                    <div className="des">
                        <input 
                        type="text" 
                        placeholder="Description"
                        value={taskInfo.description}
                        onChange={(event)=>setTaskInfo({...taskInfo,description:event.target.value})}
                        />
                    </div>
                    <div className="buttons">
                        <button className="add" onClick={addHandler}>ADD</button>
                        <button className="cancel" onClick={()=>setShowModal(false)}>CANCEL</button>
                    </div>
                </div>
                }
            </div>
            
            <TodoList todos={todos} filterTodo={filterTodo} setTodos={setTodos}/>
        </>
    )    
}

export default App;