import React from "react";
import "./filter.css"
const Filter =({ radioHandler })=>{
    return(
        <div className="wrapper">
            <label className="label">
                <input className="radio" name="filtered" type="radio" value="all" onChange={radioHandler}/>
                    <span className="radio-pulse"></span>
                    <span className="radio-button">
                        <span className="radio-button-inner"></span>
                    </span>
                    <span className="radio-label">All</span>
                </label>
            <label>
            <input className="radio" name="filtered" type="radio" value="completed" onChange={radioHandler}/>
                <span className="radio-pulse"></span>
                <span className="radio-button">
                    <span className="radio-button-inner"></span>
                </span>
                <span className="radio-label">Completed</span>
            </label>
            <label>
            <input className="radio" name="filtered" type="radio" value="uncompleted" onChange={radioHandler}/>
                <span className="radio-pulse"></span>
                <span className="radio-button">
                    <span className="radio-button-inner"></span>
                </span>
                <span className="radio-label">Uncompleted</span>
            </label>
        </div>
    )
}

export default Filter;