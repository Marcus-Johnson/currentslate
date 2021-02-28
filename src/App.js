import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState(
    [
        {
            id: 1, 
            text: 'SCRUM board review',
            day: 'March 26 at 12:30pm',
            reminder: true,
        },
        {
            id: 2, 
            text: 'AGILE methods review',
            day: 'March 26 at 1:10pm',
            reminder: true,
        },
        {
            id: 3, 
            text: 'Trello team review',
            day: 'March 26 at 2:30pm',
            reminder: false,
        }
    ]
  )

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))  
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} />:
      'Your slate is empty, add tasks to continue!'}
    </div>
  );
}

export default App;
