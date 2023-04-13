import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <article className='tw-followcard'>
        <header className='tw-followcard-header'>
          <img className='tw-followcard-avatar' alt="user_avatar" src='http://unavatar.io/midudev'></img>
          <div className='tw-followcard-info'>
            <strong>Javier</strong>
            <span className='tw-followcard-infoUserName'>@midudev</span>
          </div>
        </header>

        <aside>
          <button className='tw-followcard-button'>Follow</button>
        </aside>
      </article>
    </div>
  )
}

export default App
