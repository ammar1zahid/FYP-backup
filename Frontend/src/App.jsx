import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register'
import Test from './Pages/Test';
import ProfilePage from './Pages/ProfilePage';
import Messenger from './Pages/MessengerPage';





function App() {


  
  return (
    <>

    {/* <CartProvider> */}
         
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route> 
          <Route path="/register" element={<Register/>}></Route>  
          <Route path="/test" element={<Test/>}></Route>  
          <Route path="/profile/:userId" element={<ProfilePage/>}></Route>
          <Route path="/messenger" element={<Messenger/>}></Route>


        </Routes>
      </BrowserRouter>
    {/* </CartProvider>    */}
    </>
  )
}

export default App
