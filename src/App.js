import './App.css';
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Aboutme from './components/Aboutme.js';
//import Skillset from './components/Skillset.js';
import Achievements from './components/Achievements.js';
//import CursorAnimation from './components/CursorAnimation.js';
import ExtraCurricular from './components/ExtraCurricular.js';
import Projects from './components/Projects.js';
//import Image from './components/Image.js';
import Skills from './components/Skills.js';
//import Contactme from './components/Contactme.js';

function App() {
  return (
    <div className='gradient_background' >
      
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Achievements />
      <ExtraCurricular />
    </div>
  );
}



export default App;
