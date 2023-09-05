import Particle from './component/Particle';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Experience from './component/experience/Experience';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import Portfolio from './component/portfolio/Portfolio';
import Services from './component/services/Services';
import Testimonials from './component/testimonials/Testimonials';

function App() {
  return (
    <div className="app">
      <div className="particle-container">
        <Particle />
      </div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
