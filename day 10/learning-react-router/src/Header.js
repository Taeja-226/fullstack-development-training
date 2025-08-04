import {Link} from  'react-router-dom'
function Header() {
    return (
        <div>
            <header className="bg-purple-200 w-full text-2px h-40px m-0">
                <nav className="flex items-center justify-between bg-purple-300 shadow-md p-3">
                    <Link to='/home'>
                             <button className="text-xl font-semibold text-gray-800">Home</button>
                    </Link>
                  

                    <div className="flex items-center gap-3">
                       <Link to='/profile'>
                        <button className="text-sm px-3 py-1 border border-gray-300 bg-gray-200  rounded hover:bg-purple-600 transition">Profile</button>
                       </Link>
                       <Link to='/friends'>
                       <button className="text-sm px-3 py-1 border border-gray-300 bg-gray-200 rounded hover:bg-purple-600 transition">My friends</button>
                       </Link>
                       
                    </div>
                </nav>
            </header>
        </div>
    )
};
export { Header }