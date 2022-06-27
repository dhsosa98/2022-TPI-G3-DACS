import NavBar from "./components/NavBar"
import Login from "./components/Login"
function App() {

  return(
  <>

  <section>
    <NavBar/>
  </section>
  <section className="mt-[100px] bg-[#FFF] border-4 rounded-2xl w-[30rem] h-[30rem] mr-auto ml-auto">
    <Login/>
  </section>

  </>
  )
}

export default App
