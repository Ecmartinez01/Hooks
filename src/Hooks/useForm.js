import { useState } from "react"

export const useForm = (inicial = {}) => {
   
    const [values, setValues] = useState(inicial)

    const handleInputValue=({target})=>{
        setValues({
            ...values,
           [target.name]:target.value
        })
       }
       return [values,handleInputValue]
}
