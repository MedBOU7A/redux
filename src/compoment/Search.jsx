import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/Action'

const Search = () => {
    const [newDes, setNewDes] = useState('')
    const dispatch=useDispatch()
    const filterTask =()=> dispatch(search(newDes))
  return (
    <div>
         <input type='text' value={newDes} placeholder='search' onChange={(e)=>setNewDes(e.target.value)} />
         <button onClick={filterTask} >Search</button>
    </div>
  )
}

export default Search