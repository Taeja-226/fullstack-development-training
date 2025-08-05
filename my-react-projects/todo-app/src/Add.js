import { useState } from "react";

function Add() {
  const [formData, setFormData] = useState({
    todoTitle: "",
    dueDate: "",
    todoStatus: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Added. Your Task title is ${formData.todoTitle} , due date is ${formData.dueDate} and status is ${formData.todoStatus}`);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Add Todo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="font-medium mb-1 text-black">Todo Title:</label>
          <input
            type="text"
            name="todoTitle"
            value={formData.todoTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className=" font-medium mb-1 text-black">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300  text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className=" font-medium mb-1 text-black">Status:</label>
          <input
            type="text"
            name="todoStatus"
            value={formData.todoStatus}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Pending, Completed"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export { Add };
