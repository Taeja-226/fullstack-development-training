function Show({ taskList,toggleTaskStatus }) {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Todo List</h2>
      {taskList.length === 0 ? (
        <p className="text-center text-black">No tasks added yet.</p>
      ) : (
        <table className="min-w-full text-black table-auto border-2 border-gray-300">
          <thead>
            <tr className="bg-gray-300 border">
              <th className="px-4 py-2 border">Todo Title</th>
              <th className="px-4 py-2 border">Due Date</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{task.todoTitle}</td>
                <td className="border px-4 py-2">{task.dueDate}</td>
                <td className="border px-4 py-2"><input type="checkbox"  checked={task.isCompleted}  onChange={() => toggleTaskStatus(index)}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export { Show };
