import { useState } from 'react'
import './App.css'
import data from './data.json'
import './App.css'
//Components
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'


function App() {

  const [toDos, setToDo] = useState(data);
  
  const onComplete = (id) => {
    
    setToDo(toDos.map((toDo) => {
      return toDo.id === Number(id) ? {...toDo, completed: !toDo.completed} : {...toDo}
    }))
  }

  const onDeleteItem = (id) => {
    setToDo([...toDos].filter((toDo) => toDo.id !== Number(id)));
  }

const addTodo = (newTodo) => {
    let newItem = {id : +new Date(), task: newTodo, completed: false};
    setToDo([...toDos, newItem]);
}

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} />
      <TodoList toDos = {toDos}  onComplete={onComplete} onDeleteItem={onDeleteItem}/>
    </div>
  )
}

export default App
