import React,{useState,useEffect} from "react";
import styles from "./app.module.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
const App=()=>{

    const [inputText , setInputText]=useState("");
    const [todos , setTodos]=useState([]);
    const [status , setStatus] = useState("all");
    const [filterTodo , setFilterTodo] = useState([]);

    useEffect(()=>{
        filterHandler();
    },[todos,status]);

    const filterHandler=()=>{
        switch(status){
            case "completed":
                setFilterTodo(todos.filter((todo)=>todo.completed===true));
                break;
            case "uncompleted":
                setFilterTodo(todos.filter((todo)=>todo.completed===false));
                break;
            default:
                setFilterTodo(todos)
                break;        
        }
    
    }

    return(
        <div>
            <header className={styles.header}>
                <h1> Todo App</h1>
            </header>
            <Form 
            setInputText={setInputText} 
            setTodos={setTodos}
            todos={todos}
            inputText={inputText}
            setStatus={setStatus}
            
            />
            <TodoList todos={todos} setTodos={setTodos} filterTodo={filterTodo} setFilterTodo={setFilterTodo}/>
        </div>
       
    )
}

export default App;