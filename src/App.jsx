import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster/>
      <Navbar />
      <Hero />
      <Trusted />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;