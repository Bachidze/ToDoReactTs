import { useState, ChangeEvent } from 'react';
import './App.css';
import { ITask } from './Interfaces';
import TodoTask from './components/TodoTask';

function App() {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask: ITask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask]);
    setTask('');
    setDeadline(0);
  };

  return (
    <>
      <div className='App'>
        <div className='header'>
          <div className='inputcontainer'>
            <input
              type='text'
              placeholder='Task...'
              name='task'
              value={task}
              onChange={handleChange}
            />

            <input
              type='number'
              placeholder='Deadline (in Days)'
              name='deadline'
              value={deadline}
              onChange={handleChange}
              min="0"
            />
          </div>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className='todoList'>
          {todo.map((task: ITask) => {
            return <TodoTask key={task.id} task={task} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;

