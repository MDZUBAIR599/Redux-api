import { Add_Todo, DELETE_Todo, Edit_Todo } from "./Action.types"

export const addtodo=(payload)=>({type:Add_Todo ,payload})

export const deleteTodo=(id)=>({type:DELETE_Todo ,payload:id})

export const editTodo=(id,value)=>({type:Edit_Todo ,payload:{id,value}})