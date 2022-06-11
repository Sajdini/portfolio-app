import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesComponent from "./components/ParticlesComponents";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Biography from "./components/Biography";
import Portfolio from "./components/Portfolio";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <ParticlesComponent />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Biography />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
