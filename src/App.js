import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Information from './components/Information';
import Header from './components/Header';


function App() {
  return (
            <BrowserRouter>
     
                <Header/>
                 
                  <Routes>
                          <Route path="/"  element={<Home/>}/>
                          <Route path="/about" element={<About/>}/>
                          <Route path="/contact" element={<Contact/>}/>
                          <Route path="/information" element={<Information/>}/>

                  </Routes>
                 
            </BrowserRouter>
  );
}

export default App;
