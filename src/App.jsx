import {Routes, Route} from "react-router-dom"

import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"
import Layout from "./Layout"
import Services from "./pages/Services"

function App() {

  return (<>
  
   <Routes>
    <Route path="/" element={<Layout />} >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Route>
   </Routes>
  </>
    
  )
}

export default App
