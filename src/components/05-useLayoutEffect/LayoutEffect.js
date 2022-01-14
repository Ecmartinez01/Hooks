import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { useFetch } from '../../Hooks/useFetch'
import './layout.css'
export const Layout = () => {

    const{ counter,increment} = useCounter(1)

  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  
  const {data} = state
  const parrafo = useRef()
  const {quote} = !!data && data[0] 
   const [boxSize, setboxSize] = useState({})
  
   useLayoutEffect(()=>{
        setboxSize( parrafo.current.getBoundingClientRect())
    },[quote])
  
    return (
        <div>
            <h1 className='text-center'>Breaking Bad Qoutes</h1>
            <hr/>                                 
                    <blockquote className='blockquote text-right'>
                        <p ref={parrafo} className='mb-0'>{quote}</p>
                    </blockquote>
                <pre>{JSON.stringify(boxSize,null,3)}</pre>                 
            
            <button onClick={increment} className='btn btn-primary'>Siguiente frase</button>
            
        </div>
  )  
}

