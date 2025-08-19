import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {HomePage} from './HomePage.js';
import { Header } from "./Header";
import { Add } from "./Add";
import { Show } from "./Show";
import { Done } from './Done.js';
import { Footer } from './Footer'

function App() {
  // array of object
  // [{}, {}]
  let[todo,setTodo] = useState([])

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Add" element={<Add todo={todo} setTodo={setTodo}/> } />
          <Route path="/Show" element={<Show todo={todo} setTodo={setTodo}/>} />
          <Route path="/Done" element={<Done  todo={todo} setTodo={setTodo}/>} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export { App };