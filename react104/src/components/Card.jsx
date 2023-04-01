import React from 'react'
import List from './List'
import './styles/Card.css'

export default function Card({users , clearList, updateList, newUser }) {
  const title = '5 Birthdays Today'

  return (
    <div className='card'>
      <h1>{title}</h1>
      <List users={users} />
      <button onClick={newUser}>New User</button>
      <button onClick={clearList}>Clear List</button>
      <button onClick={updateList}>Update User</button>
    </div>
  )
}
