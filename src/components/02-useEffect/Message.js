import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [cordenadas, setCordenadas ] = useState({
        x:0,
        y:0
    })
    const {x,y} = cordenadas
    useEffect(() => {

        const mouseMove = (e)=>{
           const cordenadas = { 
               x:e.x,
               y:e.y
           }
           setCordenadas(cordenadas)
        }

        window.addEventListener("mousemove",mouseMove)
        
        return () => {
            window.removeEventListener("mousemove",mouseMove)
        }

    }, [])
    
    return (
        <div>
            <h1>Hola mundo</h1>
            <hr/>
            <p>x:{x} y:{y}</p>
        </div>
    )
}
