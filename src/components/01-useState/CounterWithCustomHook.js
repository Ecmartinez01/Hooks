import React from 'react'
import { useCounter } from '../../Hooks/useCounter'

export const  CounterWithCustomHook = () => {
    const {counter,increment,decrement,reset} = useCounter(100)
    return (
        <>
            <h1>Counter with Hook {counter}</h1>
            <hr/>
            <button onClick={()=> increment(2)} className='btn btn-primary'>Increment</button>
            <button onClick={()=> decrement(3)} className='btn btn-primary'>Decrement</button>
            <button onClick={reset} className='btn btn-primary'>Reset</button>
        </>
    )
}
