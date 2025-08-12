function TransactionPage(){
    return(
        <div class="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
  <h3 class="text-2xl font-semibold text-gray-800 mb-6">Your Bank Transactions</h3>

  <div class="overflow-x-auto">
    <table class="min-w-full text-left border border-gray-200">
      <thead class="bg-gray-100 text-gray-700">
        <tr>
          <th class="py-3 px-4 border-b">S.no</th>
          <th class="py-3 px-4 border-b">Date</th>
          <th class="py-3 px-4 border-b">Amount</th>
          <th class="py-3 px-4 border-b">Transfer Type</th>
          <th class="py-3 px-4 border-b">Account No</th>
          <th class="py-3 px-4 border-b">Transaction ID</th>
        </tr>
      </thead>
      <tbody>
       <tr class="hover:bg-gray-50">
          <td class="py-2 px-4 border-b">1</td>
          <td class="py-2 px-4 border-b">2025-08-01</td>
          <td class="py-2 px-4 border-b">$1,000</td>
          <td class="py-2 px-4 border-b">Credit</td>
          <td class="py-2 px-4 border-b">1234567890</td>
          <td class="py-2 px-4 border-b">TXN12345678</td>
        </tr>
 
      </tbody>
    </table>
  </div>
</div>

    )
};
export {TransactionPage}