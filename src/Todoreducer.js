import { Add_Todo, DELETE_Todo, Edit_Todo } from "./Actions/Action.types";
import axios from "axios"


export const TodoReducer = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case Add_Todo: {
        axios.post("http://localhost:8080/Todos",{todoname:payload,flag:false})
        break;
   
    }
   
    case DELETE_Todo:{
            axios.delete(`http://localhost:8080/Todos/${payload}`)
        } 

      case Edit_Todo:{
         let r= axios.patch(`http://localhost:8080/Todos/${payload.id}`,{todoname:payload.todoname})
          console.log(r)
          break;
      } 


    default: {
      return state;
    }
  }
};


