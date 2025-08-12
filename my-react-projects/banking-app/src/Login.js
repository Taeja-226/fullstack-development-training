import {Link} from "react-router-dom"
function Login() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-md p-6 border border-gray-200">
      <h3 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Login to your bank account
      </h3>
      <form className="space-y-4">
        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile No.:
          </label>
          <input
            type="number"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password:
          </label>
          <input
            type="password"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div>
        <Link to="/bankDetail" >
  <button
    type="button"
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
  >
    Login
  </button>
</Link>
        </div>
      </form>
    </div>
  );
}

export { Login };
