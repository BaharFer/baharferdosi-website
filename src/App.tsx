import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Ticker from './components/Ticker';
import Topbar from './components/Topbar';
import Work from './components/Work';
import './App.css';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Topbar />
      <main id="top">
        <Hero />
        <Ticker />
        <Manifesto />
        <Work />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}
