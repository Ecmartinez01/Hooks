const initialState = [{
    id:1,
    todo:'comprar pan',
    done:false
}]
const todoReducer =(state = initialState,action)=>{
     if (action?.type === "agregar") {
        return [...state, action.payload]
    }
}
let todos = todoReducer()

const action = {
    type:"agregar",
    payload:{
        id:3,
        todo:'comprar leche',
        done:false
    }
}

console.log(todoReducer(todos,action))