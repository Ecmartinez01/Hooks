import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
export const RealExampleRef = () => {
    const [show, setShow] = useState(true)
    
    return (
        <div>
            <h1>Real Example Ref</h1>
            {show && <MultipleCustomHooks/>}
            <button onClick={()=>{setShow(!show)}} className='btn btn-primary mt-5'>Show/Hide</button>
        </div>
)
}
