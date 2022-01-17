import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";
import { ListItems } from "./ListItems";
import { AddForm } from "./AddForm";

const init = () => {
 return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);


    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    const handleDelete = (todoId) => {
        
        const action = {
            type: "delete",
            payload: todoId
        }
        dispatch(action)

    }

    const handleText = (todoID)=>{
        dispatch({
            type:"toggle",
            payload:todoID
        })
    }

    const handleAddSubmit =(newTask)=>{
        dispatch({
            type:"add",
            payload:newTask
        })
    }
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ListItems 
                    todos={todos} 
                    handleText={handleText}
                    handleDelete={handleDelete}
                    />
                </div>
                <div className="col-5">
                    <AddForm handleAddSubmit = {handleAddSubmit}/>
                </div>
            </div>
        </div>
    );
};
