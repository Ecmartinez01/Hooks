import React, { useRef } from 'react'
import '../02-useEffect/effects.css'
export const FocusScreen = () => {
    const inputRef = useRef()
    const handleClick = ()=>{
        inputRef.current.select()
        console.log(inputRef)
    }
    return (
        <div>

            <h1>Focus Screen</h1>
        
        <input ref={inputRef} className='form-control' placeholder='Su nombre'/>
        
        <button 
        
        className='btn btn-outline-primary my-5'
        onClick={handleClick}
        > Focus</button>
        
        </div>
    )
}