import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTasks] = useState(
    [
        {
            id: 1, 
            text: 'SCRUM board review',
            day: 'March 26 at 12:30pm',
            reminder: false,
        },
        {
            id: 2, 
            text: 'AGILE methods review',
            day: 'March 26 at 1:10pm',
            reminder: false,
        },
        {
            id: 3, 
            text: 'Trello team review',
            day: 'March 26 at 2:30pm',
            reminder: false,
        }
    ]
  )

  const addTask = (task) => {
    console.log(task)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))  
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
    task.id === id ? {...task, reminder:
       !task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:
      'Your slate is empty, add tasks to continue!'}
    </div>
  );
}

export default App;
