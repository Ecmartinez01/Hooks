import { useState } from "react"

export const useForm = (inicial = {}) => {

    const [values, setValues] = useState(inicial)

    const reset = ()=>{
        setValues(inicial)
    }

    const handleInputValue=({target})=>{
        setValues({
            ...values,
           [target.name]:target.value
        })
       }
       return [values,handleInputValue,reset]
}
