import React from 'react'
import { ItemsLi } from './ItemsLi.js'

export const ListItems = ({todos,handleText,handleDelete}) => {
    return (
        <ul className="list-group list-group-flush">
        {todos.map((tarea, i) => (
           <ItemsLi 
           key={tarea.id} 
           tarea={tarea} 
           i={i} 
           handleText={handleText} 
           handleDelete={handleDelete}/>
        ))}
    </ul>
    )
}
