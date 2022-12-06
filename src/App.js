import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/index';
import Home from './components/Home/index';
import About from './components/About/index';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
        <>
          <Routes>
              <Route exact path="/" element={<Layout /> }>
                <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="portfolio" element={<Portfolio />} />
              </Route>
          </Routes>
        </>
    );
  }
}

export default App;
