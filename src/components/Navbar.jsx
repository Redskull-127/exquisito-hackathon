export default function Navbar() {
    return (
        <div className="flex justify-center items-center p-3">
            <nav className="flex items-center justify-between flex-wrap p-5 rounded-2xl bg-amber-500">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-3xl tracking-tight uppercase">Exquisito</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a className="block text-lg mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-10">
                            Order Now
                        </a>
                        <a className="block text-lg mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-10">
                            Contact
                        </a>
                        <a href="#responsive-header" className="block text-lg mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
                            Follow Us
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}