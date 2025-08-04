import { useState } from 'react';

function CreateAccountForm() {
    //user name, number, email, password
  let [name, setName] = useState('');
  let [number, setNumber] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  function HandleForm(e) {
    e.preventDefault();
    alert(`form submitted \n your name is ${name}, number is ${number}, email is ${email}, password is ${password}`)
        // save user detail in our database
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={HandleForm}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>

        <label className="block text-gray-700">Enter Your Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 mt-1 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-gray-700">Enter Your Mobile No.:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full px-4 py-2 mt-1 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-gray-700">Enter Your Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mt-1 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-gray-700">Create Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mt-1 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export { CreateAccountForm };
