import React from 'react'

export const ItemsLi = ({tarea,handleDelete,handleText,i}) => {
    return (
        <li key={tarea.id} className="list-group-item">
        <p  className={`${tarea.done && 'complete' }`} onClick={()=>handleText(tarea.id)}>
            {i + 1}. {tarea.desc}
        </p>
        <button type="submit" onClick={() => handleDelete(tarea.id)} className="btn btn-danger">Borrar</button>
    </li>    )
}
