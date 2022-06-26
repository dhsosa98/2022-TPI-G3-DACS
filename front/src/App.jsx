import { useState } from 'react'
import BarNavigation from './components/BarNavigation'



function App() {
  const [count, setCount] = useState(0)
  return (
    <div class="m-0 p-0">
      <BarNavigation/>
      </div>
  )
}

export default App
