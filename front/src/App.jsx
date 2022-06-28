import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import {API_BASE_URL} from './vite-env.d'

console.log(API_BASE_URL)

function App() {
  const [count, setCount] = useState(0)
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    axios.get(`${API_BASE_URL}/hotels`).then(
      response => {
        setHotels(response.data)
      }
    )
  }, [])

  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <main>
        {hotels.map(hotel => (
          <div className=' p-10' key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>{hotel.address}</p>
            <p>{hotel.phone}</p>
          </div>
        ))}

      </main>
    </div>
  )
}

export default App
