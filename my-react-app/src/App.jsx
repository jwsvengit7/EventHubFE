import './App.css'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import HomePage from './assets/components/HomePage/HomePage'
import Register from './assets/components/CreateAccount/Register'
import Login from './assets/components/Login/Login'
import VerifyUser from './assets/components/Login/Verify/VerifyUser'
import Token from './assets/components/Login/Token/Token'
import ForgetPassword from './assets/components/Login/Forget-Password/ForgetPassword'
import AuthenticatePassword from './assets/components/Login/Forget-Password/AuthenticatePassword'
import EventDetails from './assets/components/EventDetails/EventDetails'
import Chekout from './assets/components/Chekout/Chekout'
import Information from './assets/components/Dashboard/Account/Information'
import PaymentSetup from './assets/components/Dashboard/Account/PaymentSetup'
import TicketModel from './assets/components/TicketModel/TicketModel'
import Event from './assets/components/Dashboard/Event'


function App() {


  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Register />}/>
    <Route path='/user/forgetpassword/authenticate/' element={<ForgetPassword />} />
    <Route path='/verify-user/' element={<VerifyUser />} />
    <Route path="/token/:token" element={<Token />} />
    <Route path="/app/event" element={<Event />} />
    <Route path="/tokens" element={<AuthenticatePassword />} />
    <Route path="/chekout" element={<Chekout />} />

    <Route path="/app/event-details" element={<EventDetails />} />
    <Route path="/app/setup-account" element={<PaymentSetup />} />
    <Route path="/app/account" element={<Information />} />
    <Route path="/ticket" element={<TicketModel />} />

    </Routes>
    </Router>
     
    </>
  )
}

export default App
