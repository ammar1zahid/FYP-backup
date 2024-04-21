import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register'
import Test from './Pages/PagesLayout/StudentHomePage';
import ProfilePage from './Pages/PagesLayout/ProfilePage';
import Messenger from './Pages/PagesLayout/MessengerPage';
import RecruiterHomePage from './Pages/PagesLayout/RecruiterHomePage';

function App() {
  
  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route> 
          <Route path="/register" element={<Register/>}></Route>  
          <Route path="/studentHome" element={<Test/>}></Route>  
          <Route path="/recruiterHome" element={<RecruiterHomePage/>}></Route>  
          <Route path="/profile/:userId" element={<ProfilePage/>}></Route>
          <Route path="/messenger" element={<Messenger/>}></Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
