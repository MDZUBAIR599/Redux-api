import React from 'react'
import { useRef } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Add_Todo } from '../Actions/Action.types';

const Home = () => {
const ref=useRef()
const dispatch=useDispatch();
const todo=useSelector((state)=>state.todos)
 const Add=()=>{
       const refvalue=ref.current.value;
  dispatch(Add_Todo(refvalue))
 }
  return (
    <div>
        <h1>TODO</h1>
        <div>
            <input type="text" ref={ref} placeholder='Add todos'/>
        </div>
        <button  onClick={Add}>ADD</button>
        <br /><br /><br />
       
    </div>
  )
}

export default Home