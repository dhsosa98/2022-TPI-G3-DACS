import { useState } from 'react'
import BarNavigation from './components/NavBar'
import FormInicio from './components/FormInicio'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div class="m-0 p-0">
      <BarNavigation/>
      {/* <FormInicio/> */}
      </div>
  )
}

export default App
