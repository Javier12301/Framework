import React from 'react'
import TodoItem from './TodoItem.jsx'

export default function TodoList({toDos, onComplete, onDeleteItem}) {
  return (
    <div>
        {
            toDos.map((toDo, i) => (
                <TodoItem key={`todo-${i}`} toDo = {toDo} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
            ))
        }
    </div>
  )
}
