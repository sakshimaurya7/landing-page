function Home(){
    return(
         <div className="bg-gradient-to-r from-white to-blue-200 min-h-screen flex flex-col after:justify-around align-middle sm:flex-col md:flex-col">
            
            <div className="p-8 my-auto mx-auto">
                <button className="text-blue-600 font-semibold bg-blue-100 p-3 rounded-lg hover:bg-blue-600 hover:text-white hover:font-bold ">WE BUILD DIGITAL EXPERIENCES</button>
                <h1 className="font-extrabold font-serif text-7xl w-full my-6">Build Amazing Websites with Us</h1>
                <p className="w-full text-2xl">We create modern, responsive, and high-performing websites that help your business grow online.</p>

                <button className="bg-blue-600 text-white shadow-md shadow-black font-semibold px-4 py-2 my-5 mr-7 rounded-lg hover:bg-slate-200 hover:text-blue-600">Get Started</button>
                <button className="shadow-md shadow-black font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white ">Learn More &rarr;</button>
            </div>
        
            <div className="my-auto mr-20 w-full h-full shadow-2xl sm:flex-col ">
                <img src="./src/assets/heropic.png" className=" w-11/12 mx-auto rounded-lg border-blue-600 border-2 p-4 my-5"/>
            </div>

        </div>
    )
}

export default Home