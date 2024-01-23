
import { useState,ChangeEvent } from 'react'
import './App.css'
import {ITask} from './Interfaces'
import TodoTask from './components/TodoTask'

function App() {
 const [task,setTask] = useState<string>('')
 const [deadline,setDeadline] = useState<number>(0)
 const [todo,setTodo] = useState<ITask>([])

 

 const handleCgange = (e:ChangeEvent<HTMLInputElement>):void =>{
  if(e.target.name === 'task'){
    setTask(e.target.value)
  }else{
    setDeadline(Number(e.target.value))
  }

  setTask(e.target.value)
 }

 const addTask = ():void =>{
  const newTask = {taskName:task,deadline:deadline}
  setTodo([...todo,newTask])
  setTask('')
  deadline(0)
  
 }

  return (
    <>
    <div className='App'>
      <div className='header'>
        <div className='inputconatiner'>

        <input
         type="text"
         placeholder='Task...'
         name='task'
         value={task}
         onChange={handleCgange} />

        <input type="number"
         placeholder='Deadline(in Days)'
         name='deadline'
         value={deadline}
         onChange={handleCgange} />

        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todo.map((task:ITask,key:number)=>{
          return <TodoTask key={key} task={task}/>
        })}
      </div>
    </div>
    </>
  )
}

export default App
