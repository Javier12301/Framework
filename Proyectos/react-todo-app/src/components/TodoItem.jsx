import React from 'react'

export default function Todoitem({toDo, onComplete, onDeleteItem}) {

    const getStyle = () => {
        return {
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            textDecoration: toDo.completed ? 'line-through' : 'none' ,
            margin: '20px',
            border: '1px solid #fff' ,
            backgroundColor: '#CCF7E3',
            padding: '10px'
        }
    }


  return (
    <div style={getStyle()}>
        <input type='checkbox' checked = {toDo.completed}
        onChange={() => onComplete(toDo.id)}/> 
        {toDo.task}
        <div>
            <button className='delete-btn' onClick={() => onDeleteItem(toDo.id)}>X</button>
        </div>
    </div>
  )
}
