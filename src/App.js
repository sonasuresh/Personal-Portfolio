import React from 'react';
import './App.css';
import HomeView from './Views/HomeView';
import NavBar from './Components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Views/about'
import Contact from './Views/contact';
import Skills from './Views/skills';
import Experience from './Views/experiences';
import Achievements from './Views/achievements'
function App() {
  return (
    <div className="no-space">
     <NavBar/>
      <div id="home" className="pt-5 pb-5 no-space">
        <HomeView />
      </div>
      <div id="about" className="pt-5 pb-5 no-space">
        <About />
      </div>
      <div id="experiences" className="pt-5 pb-5">
        <Experience />
      </div>
      <div id="contact" className="pt-5 pb-5">
        <Contact />
      </div>
    </div>

  );
}

export default App;
