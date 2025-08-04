function Footer() {
    return (
        <footer className="border border-gray-200  shadow-md ">
        <div className="flex items-center justify-center bg-pink-100 gap-6 bg-gray-100 text-gray-700 py-4 text-sm">
            <h3 className="flex items-center gap-1 font-medium">
                Made with <span className="text-red-500">&hearts;</span> by Pooja
            </h3>
            <a href="/Contact us" className="hover:underline hover:text-purple-600 transition">
                Contact Us
            </a>
            <a href="/Contact us" className="hover:underline hover:text-purple-600 transition">
                Terms & Conditions
            </a>
        </div>
        </footer>
    )
};
export { Footer }