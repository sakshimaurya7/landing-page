function About(){
    return(
        <>
        
        <div className="bg-gradient-to-tr from-pink-200 to-blue-300 text-center py-24">
            <h1 className="font-serif font-extrabold text-5xl m-4 text-center">Our Journey: Crafting<br /> Digital Excellence</h1>
            <p className=" text-xl m-4">We are a team of passionate designers and developers dedicated to <br/> transforming ideas into functional, beautiful digital realities.</p>
        </div>
        <div className="flex flex-col mx-auto justify-between my-7 sm:flex-col md:flex-col lg:flex-row">
            <div className="w-full h-full my-8 mx-auto shadow-lg shadow-black rounded-lg md:mx-auto sm:mx-auto">
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
            <div className="flex flex-col justify-around m-3 gap-5 sm:flex-col md:flex-col lg:flex-row">
                <section className="shadow-md shadow-slate-800 p-3 rounded-lg">
                    <div className="flex justify-between">
                        <img src="./src/assets/q1.jpg" alt="Quality" className="w-16 h-auto my-auto" />
                        <span>
                            <h2 className="text-2xl font-bold">Quality</h2>
                            <p>Uncompromising standards in every line of code and design.</p>
                        </span>
                    </div>
                    <button>Learn More &rarr;</button>
                </section>

                <section className="shadow-md shadow-slate-800 p-3 rounded-lg">
                    <div className="flex justify-between">
                        <img src="./src/assets/inno.jpg" alt="Innovation" className="w-1/6 h-auto my-auto"/>
                        <span>
                            <h2 className="text-xl font-bold">Innovation</h2>
                            <p>Always pushing the boundaries of what is possible with current tech.</p>
                        </span>
                    </div>
                    <button>Learn More &rarr;</button>
                </section>

                <section className="shadow-md shadow-slate-800 p-3 rounded-lg">
                    <div className="flex justify-between">
                        <img src="./src/assets/integrity.jpg" alt="Integrity" className="w-1/6 h-auto my-auto"/>
                        <span>
                            <h2 className="text-xl font-bold">Integrity</h2>
                            <p>Building lasting partnerships through transparency and trust.</p>
                        </span>
                    </div>
                    <button>Learn More &rarr;</button>
                </section>
            </div>
        </div>
      </>
    )
}

export default About