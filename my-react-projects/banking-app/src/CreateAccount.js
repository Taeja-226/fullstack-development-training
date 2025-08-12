import { useState } from "react";

function CreateAccount() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    branch: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted: " + JSON.stringify(formData));
    setFormData({
      name: "",
      contact: "",
      branch: "",
      password: "",
    });
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-md p-6 border border-gray-200">
      <h3 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Create Your Bank Account
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mobile Number:
          </label>
          <input
            type="number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Branch */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Branch:
          </label>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a branch</option>
            <option value="Dehra">Dehra</option>
            <option value="Samalka">Samalkha</option>
            <option value="Panipat">Panipat</option>
            <option value="Sonipat">Sonipat</option>
            <option value="Rohtak">Rohtak</option>
          </select>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export { CreateAccount };
