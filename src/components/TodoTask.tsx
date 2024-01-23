import React from 'react'
import { ITask } from '../Interfaces'
interface Props {
    task:ITask;
}
const TodoTask = ({task}: Props) => {
  return (
    <div>{task.taskNAme}{task.deadline}</div>
  )
}

export default TodoTask