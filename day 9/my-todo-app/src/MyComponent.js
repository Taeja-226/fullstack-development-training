import React, { useState } from 'react';

function Tasks({ count }) {
  const [todo, setTodo] = useState(Array(count).fill(''));

  const handleChange = (index, value) => {
    const updated = [...todo];
    updated[index] = value;
    setTodo(updated);
  };

  return (
    <div>
      <ul>
        {todo.map((task, i) => (
          <li key={i}>
            <input type="checkbox" />
            <input
              type="text"
              placeholder="Enter your task"
              value={task}
              onChange={(e) => handleChange(i, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function MyComponent() {
  const [taskCount, setTaskCount] = useState(0);
  const [showTasks, setShowTasks] = useState(false);

  return (
    <div>
      <h2>My To-Do tasks are following</h2>
      <input
        type="number"
        placeholder="No. of tasks you want"
        onChange={(e) => setTaskCount(Number(e.target.value))}
      />
      <button type="submit" onClick={() => setShowTasks(true)}>+</button>
      {showTasks && <Tasks count={taskCount} />}
    </div>
  );
}

export { MyComponent };
