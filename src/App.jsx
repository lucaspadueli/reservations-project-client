import './App.css'
import SignUpPage from './pages/SignUpTest'
import HomePage from './pages/HomePage'
import NavBar from './components/NavTest'
import { Route,Routes } from 'react-router-dom'
function App() {
  

  return (
    <div>
    <NavBar/>
      <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/signup" element = {<SignUpPage/>}/>
      </Routes>
    </div>
  )
}

export default App
