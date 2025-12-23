import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Awards from './sections/Awards';
import Certificates from './sections/Certificates';
import Education from './sections/Education';
import Leadership from './sections/Leadership';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Awards />
        <Certificates />
        <Education />
        <Leadership />
      </main>
      <Footer />
    </div>
  );
}

export default App;
