import { Link } from "react-router-dom"


function Navbar(){
    return(
        <>
        <div className="flex flex-col align-middle text-center justify-around mt-4 mr-5 mb-7 sm:flex-col sm:text-center lg:flex-row md:flex-row">
            <h1 className="font-serif font-bold text-3xl ml-3">WebCraft</h1>

            <div className="font-serif font-semibold text-xl mt-4 sm:align-middle flex justify-around">
                <Link to = "/" className="mx-6">Home</Link>
                <Link to = "/about" className="mx-6">About</Link>
                <Link to = "/contact" className="mx-6">Contact</Link>
            </div>

            <div className="font-semibold font-serif mt-4">
                 <button className="shadow-md shadow-black px-5 py-3 mr-4 hover:bg-slate-200 hover:text-blue-600">Login</button>
                <button className="bg-blue-700 px-5 py-3 shadow-md shadow-black text-white hover:bg-slate-200 hover:text-blue-600">Get Started</button>
            </div>
           
        </div>
       
        </>
    )
}

export default Navbar