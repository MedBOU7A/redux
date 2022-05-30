
import { useDispatch } from 'react-redux';
import { modifier, supp } from '../redux/Action';


const Task = ({task}) => {
  
  const dispatch=useDispatch()
  const handelDel =()=>dispatch(supp(task.id))
  const handelChang =()=>dispatch(modifier(task.id))
  return (
    <div>
      <h1 className={task.isDone ? "Done" :""} > task describtion :{task.describtion}  </h1>
      <button onClick={handelChang} > complited </button>
      <button onClick={handelDel} > delete </button>
    </div>
  )
}

export default Task ;