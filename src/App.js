import React from 'react';
import './App.css';
import Information from './components/Information';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Awards from './components/Awards';

function App() {
  return (
    <div className="App container">
      <div className="row d-flex justify-content-center">
        <p>CV Maker: Create professional resumes for free.</p>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 col-md-12">
          <Information />
          {/* <Education />
          <Achievements />
          <Skills />
          <Awards /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
