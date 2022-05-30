import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/Action';

const Addtask = () => {
    const [newTask, setNewTask] = useState({
      id: Math.random(),
      describtion: '',
      isDone : false
    })

const dispatch=useDispatch();
const handelAdd=()=>dispatch(addTask(newTask))
      
    
  return (   
    <div>
        <label>task name</label>
        <input type='text' placeholder='task name' value={newTask.describtion} onChange={(e)=>setNewTask({...newTask,describtion:e.target.value})} />
        
        <button onClick={handelAdd} >Add</button>

    </div>
  )
}

export default Addtask