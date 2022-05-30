import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
    const {toDo}=useSelector(state=>state)
  return (
    <div>
        {
            toDo.map(el=> <Task task={el} />)
        }
    </div>
  )
}

export default ListTask