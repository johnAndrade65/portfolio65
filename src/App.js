import './App.css';
import Header from './components/Header';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Whatsapp from './components/Whatsapp';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';

const App = () => {
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
