import { useState } from "react"

export const useCounter = (initialSatte = 20) => {
   const [counter, setState] = useState(initialSatte)

   const increment =()=>{
       setState(counter + 1)
   }
   
   const decrement =()=>{
    setState(counter - 1)
    }

    const reset =()=>{
    setState(initialSatte)
    }

 return {
    counter,
    increment,
    decrement,
    reset   
}
}
