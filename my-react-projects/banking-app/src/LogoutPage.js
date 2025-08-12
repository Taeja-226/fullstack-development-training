import {Link}from "react-router-dom"
function LogoutPage() {
    return (
        <div class="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Logout Your Bank Account</h3>
            <Link to="/">
            <button
                type="submit"
                class="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition duration-300"
            >
                Confirm
            </button>
            </Link>
        </div>

    )
};
export { LogoutPage }