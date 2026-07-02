function Contact(){
    return(
        <>
        
        <div className="flex flex-col justify-around sm:flex-col md:flex-row lg:flex-row">
            <div className="w-full m-4 p-4 my-auto sm:w-full lg:w-1/2 md:w-1/2">
                <b className="bg-blue-100 text-blue-600 p-3 my-4 hover:bg-blue-600 hover:text-white font-bold rounded-md">CONTACT US</b>
                <h1 className="my-4 font-extrabold text-4xl font-serif">Let's Work Together</h1>
                <p className="mr-4 text-md mb-3">Have a project in mind or need more information? We'd love to hear from you. Fill out the form or use the conatct information below to reach us.</p>
                
                <div className="flex justify-start gap-5 my-5">
                    <img src="./src/assets/email.png" alt="Email" className="w-8 h-auto rounded-full my-auto"/>
                    <span>
                        <h2 className="font-bold text-lg">Email</h2>
                        <p>hello@webcraft.com</p>
                    </span>
                </div>
                
                <div className="flex justify-start gap-5 my-5">
                    <img src="./src/assets/call.png" alt="Call" className="w-8 h-auto rounded-full my-auto" />
                    <span>
                        <h2 className="font-bold text-lg">Call Us</h2>
                        <p>+1(123)456-7890</p>
                    </span>
                </div>
                

                <div className="flex justify-start gap-5 my-5" >
                    <img src="./src/assets/loc.webp" alt="Location" className="w-8 h-auto rounded-full my-auto" />
                    <span>
                        <h2 className="font-bold text-lg">Visit Us</h2>
                        <p>123, Main Street, New York, USA</p>
                    </span>
                </div>

                <div className="flex justify-start gap-5 my-5">
                    <img src="./src/assets/clock.png" alt="clock" className="w-8 h-auto rounded-full my-auto" />
                    <span>
                        <h2 className="font-bold text-lg">Business Hours</h2>
                        <p>Mon-Fri, 9:00 AM - 6:00 PM</p>
                    </span>
                </div>
                
            </div>

            <div className="mr-14 w-full mt-4 lg:w-1/2">
                <form className="w-full m-4 border-gray-450 border-2 rounded-lg p-6 my-auto sm:min-w-full md:w-full lg:w-2/3">
                    <h2 className="font-bold text-2xl font-serif text-center">Send Us a Message</h2>
                    <label for="name" className="my-4 font-semibold text-xl">Full Name</label><br />
                    <input type="text" placeholder="Enter your full name" name="name" id="name" className="border-2 border-gray-450 transition-colors duration-100 focus:outline-none focus:border-blue-500 w-full p-2"/><br /><br />

                    <label for="email" className="my-4 font-semibold text-xl">Email Address</label><br />
                    <input type="email" placeholder="Enter your email" name="email" id="email" className="border-2 border-gray-450 transition-colors duration-100 focus:outline-none focus:border-blue-500 w-full p-2"/><br /><br />
                    
                    <label for="sub" className="my-4 font-semibold text-xl">Subject</label><br />
                    <input type="text" placeholder="Enter the subject" name="sub" id="sub" className="border-2 border-gray-450 transition-colors duration-100 focus:outline-none focus:border-blue-500 w-full p-2"/><br /><br />

                    <label for="mess" className="my-4 font-semibold text-xl">Your Message</label><br />
                    <textarea rows={3} cols={50} placeholder="Write your message here..." className="border-2 border-gray-450 transition-colors duration-100 focus:outline-none focus:border-blue-500 w-full p-2"></textarea><br /><br />

                    <button className="font-bold bg-blue-600 text-white text-center w-full p-2 text-xl rounded-lg hover:bg-slate-300 hover:text-blue-600">Send Message</button>
                </form>
            </div>

        </div>
        
        <div>
            <h1 className="text-center font-bold text-3xl m-5 rounded-lg">Visit Us</h1>
            <div className="flex flex-col justify-around md:mx-auto sm:flex-col lg:flex-row">
                <img src="./src/assets/v1.avif" className="w-full h-auto sm:w-full lg:w-full md:w-full m-4 rounded-lg"/>
                <img src="./src/assets/v2.avif" className="w-full h-auto sm:w-full m-4 md:mr-6 lg:w-full md:w-full rounded-lg"/>
                <img src="./src/assets/v1.avif" className="w-full h-auto sm:w-full m-4 lg:w-full md:w-full rounded-lg"/>
                <img src="./src/assets/v2.avif" className="w-full h-auto sm:w-full m-4 lg:w-full md:w-full rounded-lg"/>
            </div>
        </div>

        <div className="flex flex-col items-center">
            <b className="bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-xl px-4 py-3">FAQ</b>
            <h1 className="font-bold text-3xl font-serif">Frequently Asked Questions</h1>
            <p>How long does it take to complete a project?  <span>+</span></p>
            <p>What services do you offer? <span>+</span></p>
            <p>How can I get started? <span>+</span></p>
        </div>
        </>
    )
}

export default Contact