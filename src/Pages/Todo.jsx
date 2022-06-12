import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DELETE_Todo , Edit_Todo} from "../Actions/Action.types";
;

const Todolist = () => {
 

  const [list, setlist] = useState([]);
  const dispatch = useDispatch();
  
const HandleOnChange=(e)=>{
console.log(e.target.checked )
}

  useEffect(() => {
    async function pop() {
      let r = await axios.get("http://localhost:8080/Todos");
      setlist(r.data);
    }
    pop();
  }, [list]);

  const handleDelete = (id) => {
    dispatch(DELETE_Todo(id));
  };

// console.log(flag)

  return (
    <div>
      <h1>TODO LIST</h1>

      <div style={{ display: "flex" }}>

        {list.map((todo) => {
          return (
            <ul key={todo.id}>

              <input style={{height:"19px"}} type="checkbox" onChange={HandleOnChange} />

              <Link to={`/todo/${todo.id}`}>{todo.todoname}</Link>

              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              
               
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;


