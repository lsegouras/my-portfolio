import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/pages/Menu";
import Header from "./components/pages/Header";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Goals from "./components/pages/Goals";
import WhyHireMe from './components/pages/WhyHireMe';
import Experience from './components/pages/Experience';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <>
    <Menu />
    <Header />
    <About />
    <Goals />
    <WhyHireMe />
    <Skills />
    <Experience />
    <Portfolio />
    

    </>
  );
}

export default App;
