import { Link } from "react-router-dom"

import { FaFacebookF , FaInstagram , FaTwitter , FaLinkedinIn } from "react-icons/fa"

function Footer(){
    return(
        <>
        <div className="bg-gradient-to-bl from-indigo-700 to-slate-500 text-white border-white border-2 pt-9 rounded-lg">
            <section className="width-1/3 m-6 text-center">
                <h1 className="font-bold text-2xl">WebCraft</h1>
                <p>
                    We build modern, responsive, and high-performing <br /> websites that help your business grow.
                </p>
            </section>
            <div className="flex flex-col justify-around sm:flex-col md:flex-col lg:flex-row text-center">
                <section>
                    <h2 className="font-bold text-lg">Quick Links</h2>
                    <Link to="/" className="hover:text-blue-300 focus:text-black">Home</Link><br />
                    <Link to="/about" className="hover:text-blue-300 focus:text-black">About</Link><br />
                    <a href="#services" className="hover:text-blue-300 focus:text-black">Services</a><br />
                    <a href="#portfolio" className="hover:text-blue-300 focus:text-black">Portfolio</a><br />
                    <a href="#pricing" className="hover:text-blue-300 focus:text-black">Pricing</a><br />
                </section>

                <section>
                    <h2 className="font-bold text-lg">Resources</h2>
                    <a href="#blog" className="hover:text-blue-300 focus:text-black">Blog</a><br />
                    <a href="#faq" className="hover:text-blue-300 focus:text-black">FAQs</a><br />
                    <a href="#policy" className="hover:text-blue-300 focus:text-black">Privacy Policy</a><br />
                    <a href="#conditions" className="hover:text-blue-300 focus:text-black">Terms & Conditions</a><br />
                    <a href="#support" className="hover:text-blue-300 focus:text-black">Support</a><br />
                </section>

                <section>
                    <h2 className="font-bold text-lg">Contact Us</h2>
                    <p>hello@webcraft.com</p>
                    <p>+1(123)456-7890</p>
                    <p>123, Main Street, New York, USA</p>
                </section>

                <section>
                    <h2 className="font-bold text-lg">Follow Us</h2>
                    <div className="flex justify-between gap-5 my-4">
                        <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF size={20} /></a>
                        <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter size={20} /></a>
                        <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedinIn size={20} /></a>
                        <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram size={20} /></a>
                    </div>
                    
                </section>
            </div>
           <p className="text-center font-semibold mt-3">&copy; 2026 WebCraft. All rights reserved.</p>
            
        </div>
        </>
    )
}

export default Footer