function Header(){
    return(
    <div>
        <nav className="flex justify-between bg-purple-200  m-0 w-full text-black">
            <h1 className="pl-2 font-bold text-2xl">My To-DO App</h1>
            <a href="/Home" className="text-lg hover:underline">Home</a>
            <a href="/About"  className="text-lg hover:underline">About</a>
            <div className=" flex item-center gap-2">
            <input type="text" placeholder="Search any to-do task here" className="px-3 py-1  rounded-md border border-gray-200 foucs:outline-none focus:ring-purple-500 focus:ring-2 "/>
            <button type="submit" className=" px-4 py-1 border-2 rounded-md border-gray-400 hover:text-white transition hover:bg-purple-400">Submit</button>
            </div>
          
        </nav>
    </div>
    )
};
export {Header};