import React, { useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Edittodo = () => {
  const [item, setitem] = useState("")
  const {id}=useParams()
    const handleEdit=async()=>{
        console.log(item)
        await axios.patch(`http://localhost:8080/Todos/${id}`,{todoname:item})

      }

  return (
    <div>
        <h1>Update your TODO Here</h1>
         <input onChange={(e)=>setitem(e.target.value)} type="text" placeholder='Edit your Todo here...'/>
         <button onClick={handleEdit}>Update</button>
    </div>
  )
}

export default Edittodo