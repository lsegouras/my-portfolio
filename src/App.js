import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Goals from "./components/pages/Goals";
import WhyHireMe from "./components/pages/WhyHireMe";
import Experience from "./components/pages/Experience";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/goals' element={<Goals />} />
          <Route path='/whyhireme' element={<WhyHireMe />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/footer' element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
