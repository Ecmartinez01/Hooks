import React from 'react'
import { useForm } from '../../Hooks/useForm'

export const AddForm = ({handleAddSubmit}) => {

    const [{ description }, haandleInput, reset] = useForm({
        description: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (description.trim().length <= 1) {
            return
        }
        const nuevaTarea = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        }

        handleAddSubmit(nuevaTarea)
        reset()
    }
    return (
        <>
         <h4>Agregar Tareas</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            className="form form-control"
                            type="text"
                            name="description"
                            placeholder="Aprender..."
                            autoComplete="off"
                            onChange={haandleInput}
                            value={description}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary my-1 btn-block" > Agregar
                        </button>
                    </form>   
        </>
    )
}
