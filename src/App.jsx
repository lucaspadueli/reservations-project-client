import './App.css'
import HomePage from './pages/HomePage'
import { Route,Routes } from 'react-router-dom'
function App() {
  

  return (
    <div>
      <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
