import {Header1} from './Header1'
import {Header2} from './Header2'
import {Footer} from './Footer'
import {HomePage} from './HomePage'
import {CreateAccount} from './CreateAccount'
import {Login} from './Login'
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div >
      <BrowserRouter>
         <Header1/>
         
         <Header2/>
      <Routes>
        
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Account" element={<CreateAccount/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/bankDetail" element={<bankDetail/>}/>
        <Route path="/transfer" element={<transfer/>}/>
        <Route path="/transaction" element={<transaction/>}/>
        <Route path="/logout" element={<logout/>}/>
        </Routes>
          <Footer/>
        </BrowserRouter>

    </div>
  );
}

export {App};
