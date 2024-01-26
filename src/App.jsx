import './App.css'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import { Route,Routes } from 'react-router-dom'
function App() {
  

  return (
    <div>
      <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/signup" element = {<SignUpPage/>}/>
      </Routes>
    </div>
  )
}

export default App
