import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Add } from "./Add";
import { Show } from "./Show";
import { Header } from "./Header";
import { Completed } from './Completed';
import { Footer } from './Footer'

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    setTaskList(prev => [...prev, { ...task, isCompleted: false }]);
  };

  const toggleTaskStatus = (index) => {
    setTaskList(prev =>
      prev.map((task, i) =>
        i === index ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div class="flex flex-col min-h-screen justify-between">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Add" element={<Add addTask={addTask} />} />
          <Route path="/Show" element={<Show taskList={taskList} toggleTaskStatus={toggleTaskStatus} />} />
          <Route path="/Completed" element={<Completed taskList={taskList} />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export { App };
