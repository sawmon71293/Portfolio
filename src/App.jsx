import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import About from './component/about/About';
import Experience from './component/experience/Experience';
import Portfolio from './component/portfolio/Portfolio';
import Testimonials from './component/testimonials/Testimonials';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Services from './component/services/Services';
import Particle from './component/Particle';

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
