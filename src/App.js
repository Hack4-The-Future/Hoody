import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { userContext } from './Context/userContext';
import { Nav } from './Components/Navbar/Nav';
import { Home } from './Components/Pages/Home/Home';
import  {About}  from './Components/Pages/About/About';
import { Contact } from './Components/Pages/Contact/Contact';
import { SignUp } from './Components/Pages/SignUp';
import { Login } from './Components/Pages/Login';
import { Footer } from './Components/Footer/Footer';
import {UserListener} from './hook/userListener'
import UserProfile from './Components/UserAccount/UserProfile'

function App() {
  const {user} = UserListener()
  console.log('user: ' , user)
  return (
    <userContext.Provider value={{user}}>
        <Router>
          <Nav />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Profile' element={<UserProfile />} />
          </Routes>
          <Footer />
        </Router>
    </userContext.Provider>
  );
}

export default App;
