import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'
export const SimpleForm = () => {
    const [form, setForm] = useState({
        nombre:"",
        correo:""
    })

    const {nombre,correo} = form

    useEffect(()=>{
    },[nombre])

    useEffect(()=>{
    },[form])

    const handleInputValue=({target})=>{
     setForm({
         ...form,
        [target.name]:target.value
     })
    }
    
    return (
        <>
            <h1>Simple Form</h1>
            <hr/>
            <div className='form-group'> 
                <input 
                type="text"
                placeholder='Tu nombre aqui'
                name="nombre"
                autoComplete='off'
                className='form-control'
                value={nombre}
                onChange={handleInputValue}

                />
            </div>
            <div className='form-group'> 
                <input 
                type="text"
                placeholder='email@gmail.com'
                name="correo"
                autoComplete='off'
                className='form-control'
                value={correo}
                onChange={handleInputValue}

                />
            </div>
            {(nombre === "1234") && <Message/>}
        </>
    )
}
