import { useReducer, useState } from 'react'
import './App.css'


// Components
import Header from './components/Header'
import AddTask from './components/AddTask'



// List item basic values:
// {
//   id: Number ( for filtering/deleting),
//   todo: String,
//   completed: Boolean,
// }


function App() {
  const [task, setTask] = useState("");

  return (
    <>
      <Header />
      <AddTask state={task} setState={setTask}/>
    
    </>
  )
}

export default App
