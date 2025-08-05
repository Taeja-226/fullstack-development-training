import {Header} from './Header'
import {Add} from './Add'
import {Footer} from './Footer'
import {Show} from './Show'
import {Completed} from './Completed'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div class="flex flex-col justify-between min-h-screen">
      <BrowserRouter>
             <Header/>
           <Routes>
             <Route path="/Add" element={<Add />} />
             <Route path="/Show" element={<Show />}/> 
             <Route path="/Completed" element={<Completed />}/> 
           </Routes>
            <Footer/>
      </BrowserRouter>
   

    </div>
  );
}

export {App};
