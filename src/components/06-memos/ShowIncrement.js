import React from 'react'

export const ShowIncrement = React.memo(({incrementar}) => {
    console.log("Me volvi a llamar :c")
    return (   
        <div>
           <button className='btn btn-primary' onClick={incrementar}>incrementar</button>           
        </div>
    )
})
