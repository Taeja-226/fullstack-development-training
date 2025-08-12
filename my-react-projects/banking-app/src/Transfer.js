function Transfer(){
    return(
      <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
  <h3 class="text-2xl font-semibold text-gray-800 mb-6 text-center">
    Transfer Money Between Accounts
  </h3>
  
  <form class="space-y-5">
    <div>
      <label class="block text-gray-700 font-medium mb-1">From Account:</label>
      <input 
        type="number" 
        required 
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label class="block text-gray-700 font-medium mb-1">To Account:</label>
      <input 
        type="number" 
        required 
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label class="block text-gray-700 font-medium mb-1">Amount:</label>
      <input 
        type="number" 
        required 
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button 
      type="submit" 
      class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition duration-300"
    >
      Submit
    </button>
  </form>
</div>

    )
};
export {Transfer}