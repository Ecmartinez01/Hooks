import React, { useState } from 'react'

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1:10,
        counter2:11,
        counter2:11,
        counter2:11
    })
    const {counter1,counter2,counter3} = state
    return (
        <>
         <h1>Ciunter1 { counter1}</h1>
         <h1>Ciunter2 {counter2}</h1>
         <h1>Ciunter2 {counter3}</h1>
         <hr/>
         <button className='btn btn-primary' onClick={()=> {
             setState({
                ...state,
                counter2:counter2 + 1, 
                counter1:counter1 + 1,
                
                })
              } }>Counter +1</button>   
        </>
    )
}
