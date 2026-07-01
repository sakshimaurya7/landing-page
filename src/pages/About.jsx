function About(){
    return(
        <>
        
        <div className="bg-gradient-to-tr from-pink-200 to-blue-300 text-center py-24">
            <h1 className="font-serif font-extrabold text-5xl m-4 text-center">Our Journey: Crafting<br /> Digital Excellence</h1>
            <p className=" text-xl m-4">We are a team of passionate designers and developers dedicated to <br/> transforming ideas into functional, beautiful digital realities.</p>
        </div>
        <div className="flex justify-between my-7 sm:flex-col md:flex-col lg:flex-row">
            <div className="w-full h-full m-8 shadow-lg shadow-black rounded-lg md:w-full sm:min-w-full lg:w-1/2">
                <img src="./src/assets/aboutpic.png" className="rounded-lg"/>
            </div>

            <div className=" my-auto mx-8">
                <b className="bg-blue-100 text-blue-600 p-3 my-4 rounded-md hover:bg-blue-600 hover:text-white">ABOUT US</b>
                <h1 className="text-5xl font-bold mt-6">We Build Solutions That Solve Problems</h1>
                <p className="text-xl font-semibold mt-3 mb-3">
                    We are a team of passionate designers and developers who love creating digital experiences that make a difference. 
                    Our goal is to deliver solutions that are not only beautiful but also functional and effective.
                </p>

                <button className="font-bold bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md shadow-black hover:bg-slate-200 hover:text-black">Learn More &rarr;</button>
            </div>
            
        </div>

        <div>
            <h1 className="text-4xl font-bold font-serif text-center">Core Values</h1>
            <div className="flex justify-around m-3 gap-5">
                <section className="shadow-md shadow-slate-800 p-3 rounded-lg">
                    <h2 className="text-xl font-bold">Quality</h2>
                    <p>Uncompromising standards in every line of code and design.</p>
                    <button>Learn More &rarr;</button>
                </section>

                <section className="shadow-md shadow-slate-800 p-3 rounded-lg">
                    <h2 className="text-xl font-bold">Innovation</h2>
                    <p>Always pushing the boundaries of what is possible with current tech.</p>
                    <button>Learn More &rarr;</button>
                </section>

                <section className="shadow-md shadow-slate-800 p-3 rounded-lg">
                    <h2 className="text-xl font-bold">Integrity</h2>
                    <p>Building lasting partnerships through transparency and trust.</p>
                    <button>Learn More &rarr;</button>
                </section>
            </div>
        </div>
      </>
    )
}

export default About