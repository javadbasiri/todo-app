import React from "react";

import styles from "./form.module.css";

const Form = ({setInputText,setTodos,inputText,todos,setStatus})=>{

    const inputTextHandler=(e)=>{
        setInputText(e.target.value)
    }

    const clickHandler =(e)=>{
        e.preventDefault();
        if(!inputText){alert("Please Enter a Task"); return;}
        setTodos([
            ...todos,
            {text:inputText,completed:false,id:Date.now(),del:false}
        ])

        setInputText("");
         
    }
    const statusHandler=(e)=>{
        setStatus(e.target.value);
    }

    return(
            <form className={styles.form}>
                <input value={inputText} type="text" className={styles.todoinput} onChange={inputTextHandler}   />
                <button onClick={clickHandler} type="submit" className={styles.todobutton}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className={styles.select}>
                    <select onChange={statusHandler} name="todo" className={styles.filtertodo}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
    )
}

export default Form;