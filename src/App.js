import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesComponent from "./components/ParticlesComponents";
import Hero from "./components/Hero";
import About from "./components/About";
function App() {
  return (
    <>
      <ParticlesComponent />
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
