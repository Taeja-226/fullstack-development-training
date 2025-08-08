
import {Link} from "react-router-dom"
function Header1() {
    return (
        <header class="bg-gray-300 shadow">
            <nav class="flex items-center justify-between ">
               <Link to="/">
                <h2 class="text-2xl font-bold text-gray-800 p-2">Home</h2>
               </Link>
               



                <div class="space-x-6">
                        <Link to="/Account">
                        <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition">Create Account</a>
                        </Link>
                    
                       <Link to="/Login">
                              <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition m-3">Login</a>
                        </Link>
                      
              


                </div>
            </nav>
        </header>

    )
};
export { Header1 }