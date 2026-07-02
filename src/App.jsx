import {Routes, Route} from "react-router-dom"

import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"
import Layout from "./pages/Layout"
import Services from "./pages/Services"
import Notfound from "./pages/Notfound"

function App() {

  return (<>
  
   <Routes>
    <Route path="/" element={<Layout />} >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Route>
    <Route path="*" element={<Notfound />} />
   </Routes>
  </>
    
  )
}

export default App
