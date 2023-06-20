import './App.css'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import HomePage from './assets/components/HomePage/HomePage'
import Register from './assets/components/CreateAccount/Register'
import Creator from './assets/components/CreateAccount/Creator'
import Login from './assets/components/Login/Login'
import VerifyUser from './assets/components/Login/Verify/VerifyUser'
import Token from './assets/components/Login/Token/Token'
import Dashboard from './assets/components/Dashboard/Dashboard'
import ForgetPassword from './assets/components/Login/Forget-Password/ForgetPassword'
import AuthenticatePassword from './assets/components/Login/Forget-Password/AuthenticatePassword'
import EventDetails from './assets/components/EventDetails/EventDetails'
import PaymentSetup from './assets/components/Test/check'


function App() {


  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Register />}/>
    <Route path='/signup-creator' element={<Creator />}/>
    <Route path='/user/forgetpassword/authenticate/' element={<ForgetPassword />} />
    <Route path='/verify-user/' element={<VerifyUser />} />
    <Route path="/token/:token" element={<Token />} />
    <Route path="/app/dashboard" element={<Dashboard />} />
    <Route path="/tokens" element={<AuthenticatePassword />} />
    <Route path="/event-details" element={<EventDetails />} />
    <Route path="/app/account" element={<PaymentSetup />} />


    </Routes>
    </Router>
     
    </>
  )
}

export default App
