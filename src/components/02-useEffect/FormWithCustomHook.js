import React, { useEffect } from 'react'
import { useForm } from '../../Hooks/useForm'
import './effects.css'

export const FormWithCustomHook = () => {
    const [values, handleInputValue] = useForm({
        nombre:"",
        correo:"",
        password:''
    })

    const {nombre,correo,password} = values

    useEffect(()=>{
        console.log("El correo cambio")
    },[correo])

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(values)
    }

    return (
        <form onSubmit={handleSubmit}>
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

            <div className='form-group'> 
                <input 
                type="password"
                placeholder='******'
                name="password"
                className='form-control'
                value={password}
                onChange={handleInputValue}
                />
            </div>
            <button className='btn btn-primary' type='submit'>Guardar</button>
        </form>
    )
}
