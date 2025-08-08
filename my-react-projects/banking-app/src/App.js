import {Header} from './Header'
import {Footer} from './Footer'
import {HomePage} from './HomePage'
import {CreateAccount} from './CreateAccount'
import {Login} from './Login'
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div >
      <BrowserRouter>
         <Header/>
         
         <Header/>
      <Routes>
        
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Account" element={<CreateAccount/>} />
        <Route path="/Login" element={<Login/>}/>
        </Routes>
          <Footer/>
        </BrowserRouter>

    </div>
  );
}

export {App};
