import './App.css'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import HomePage from './assets/components/HomePage/HomePage'

function App() {


  return (
    <>
    {/* <HomePage /> */}
    <Router>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' />
    <Route path='/signup'/>
    </Routes>
    </Router>
     
    </>
  )
}

export default App
