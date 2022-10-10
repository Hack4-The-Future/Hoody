import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { userContext } from './Context/userContext';
import { Nav } from './Components/Navbar/Nav';
import { Home } from './Components/Pages/Home';
import { About } from './Components/Pages/About';
import { Contact } from './Components/Pages/Contact';
import { SignUp } from './Components/Pages/SignUp';
import { Login } from './Components/Pages/Login';
import { Footer } from './Components/Footer/Footer';
import {UserListener} from './hook/userListener'
import { Dashboard } from './Components/Pages/Dashboard';

function App() {
  const {user} = UserListener()
  console.log('user:' , user)
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
            <Route path={`/Dashboard/username`} element={<Dashboard  user={user}/>} />
          </Routes>
          <Footer />
        </Router>
    </userContext.Provider>
  );
}

export default App;
