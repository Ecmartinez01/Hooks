import React, { useMemo } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import '../02-useEffect/effects.css'
import { FuncionPesada } from '../helpers/FuncionPesada'
import { Small } from './Small'
export const Memorize = () => {
        const {counter,increment} = useCounter()
   
       const funcionPesadaa= useMemo(() =>FuncionPesada(counter) , [counter])
        
        return (
        <div>
            <h1>Counter: <Small value={counter}/> </h1>
            <p>{funcionPesadaa}</p>
            <hr/>
            <button onClick={increment} className='btn btn-primary'>+1</button>
        </div>
    )
}
