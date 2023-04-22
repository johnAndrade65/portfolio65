//CSS
import './App.css';

//components
import Header from './components/Header';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Whatsapp from './components/Whatsapp';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';

//Bibloteca de animação AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);

  return (
    <div className="App">
      <Header/>
      <Resume/>
      <Whatsapp/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
