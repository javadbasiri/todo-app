import React from "react";
import styles from "./Todolist.module.css"
import Todo from "./todo"
const TodoList = ({ todos,setTodos,filterTodo })=>{
    return(
        <div className={styles.container}>
            <ul>
               {
                   filterTodo.map((item)=>(
                       <Todo text={item.text} 
                             key={item.id}
                             todo={item}
                             todos={todos}
                             setTodos={setTodos}  
                        />
                   ))
               }
            </ul>
        </div>
    )
}
export default TodoList;