function Completed({ taskList }) {
  const completedTasks = taskList.filter(task => task.isCompleted);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Completed Tasks</h2>
      {completedTasks.length === 0 ? (
        <p className="text-center text-black">No completed tasks yet.</p>
      ) : (
        <table className="min-w-full table-auto border text-black  border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Todo Title</th>
              <th className="px-4 py-2 border">Due Date</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {completedTasks.map((task, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{task.todoTitle}</td>
                <td className="border px-4 py-2">{task.dueDate}</td>
                <td className="border px-4 py-2">{task.todoStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export { Completed };
