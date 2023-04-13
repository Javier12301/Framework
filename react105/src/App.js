import { useEffect, useState } from 'react';
import { getGifs } from './services/getGifs';
import './App.css';


function App() {

  const [gifs, setGifs] = useState([])

  useEffect(function () {
    getGifs().then(gifs => setGifs(gifs));
  }, [])

  return (
    <div className="App">
      <header className='App-content'>
        <section className='App-content-section'>
          {gifs.map(singleGif => <img src={singleGif} />)}
        </section>
      </header>
    </div>
  );
}

export default App;
