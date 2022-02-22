import React from "react";
import Todo from "./todo";
import "./TodoList.css"

const TodoList = ({todos , setTodos,filterTodo})=>{
    return(
        <div className="list-container">
            <ul>
                {filterTodo.map(item=><Todo key={item.id} todo={item} todos={todos} setTodos={setTodos} />)}
            </ul>
        </div>
    )
}

export default TodoList;
