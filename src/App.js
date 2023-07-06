import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/pages/Menu";
import Header from "./components/pages/Header";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Goals from "./components/pages/Goals";
import Experience from './components/pages/Experience';

function App() {
  return (
    <>
    <Menu />
    <Header />
    <About />
    <Goals />
    <Skills />
    <Experience />
    

    </>
  );
}

export default App;
