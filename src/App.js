import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Skills } from './pages/Skills';
import { Experience } from './pages/Experience';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Suspense>
      </>
    </BrowserRouter>
  );
};

export default App;
