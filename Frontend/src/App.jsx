import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register'
import Test from './Pages/Test';
import ProfilePage from './Pages/ProfilePage';
import CV from './Pages/cv/CV';
import FirstCV from './Pages/cv/cvTemplates/FirstCV';
import SecondCV from './Pages/cv/cvTemplates/SecondCV';
import Text from './Text';
import CVlayout from './Pages/CVlayout';
import PorfolioPage from './portfolio/PorfolioPage';
import EditablePortfolio from './portfolio/EditablePortfolio';
// import { CartProvider } from './context/ContextReducer';
// import Home from './Pages/home/Home';
// import Profile from './Pages/profile/Profile';
// import Text from "./Text"


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
          <Route path="/CVlayout" element={<CVlayout/>}></Route>  
          <Route path="/FirstCV" element={<FirstCV/>}></Route>
          <Route path="/SecondCV" element={<SecondCV/>}></Route>  
          <Route path="/Text" element={<Text/>}></Route> 
          <Route path="/PortfolioPage" element={<PorfolioPage/>}></Route> 
          <Route path="/EditablePortfolio" element={<EditablePortfolio/>}></Route> 

        </Routes>
      </BrowserRouter>
    {/* </CartProvider>    */}
    </>
  )
}

export default App
