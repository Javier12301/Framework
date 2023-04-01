import React from 'react'
import './styles/User.css'

export default function User({name, age}) {
  return (
    <div className='user-info'>
        
        <h4 className='user-name'>
            {name}
        </h4>
        <p className='user-age'>
            {age}
        </p>
        
    </div>
  )
}