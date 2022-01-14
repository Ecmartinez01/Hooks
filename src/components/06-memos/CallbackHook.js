import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement'
export const CallbackHook = () => {
  
    const [counter, setCounter] = useState(0)

const incrementar = useCallback(()=>{
        setCounter(c => c +1)
    },[setCounter])
    return (
        <div>
            <h1>useCallbackHook </h1>
            <h3>{counter}</h3>
            <hr/>
            <ShowIncrement incrementar={incrementar}/>
        </div>
    )
}
