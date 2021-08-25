import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/styles.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';



ReactDOM.render(
  
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Footer />
  </React.StrictMode>,
  
  document.getElementById('root')
  
);

