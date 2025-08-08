
import {Link} from "react-router-dom"
function Header2() {
    return (
        <header class="bg-gray-300 shadow">
            <nav class="flex items-center justify-between ">
               <Link to="/">
                <h2 class="text-2xl font-bold text-gray-800 p-2">Home</h2>
               </Link>
               



                <div class="space-x-6">
                        <Link to="/bankDetail">
                        <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition">Bank Details</a>
                        </Link>
                    
                       <Link to="/transfer">
                              <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition m-3">Transfer</a>
                        </Link>
                         <Link to="/transaction">
                              <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition m-3">Transaction</a>
                        </Link>
                         <Link to="/logout">
                              <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition m-3">Logout</a>
                        </Link>
                      
              


                </div>
            </nav>
        </header>

    )
};
export { Header2 }