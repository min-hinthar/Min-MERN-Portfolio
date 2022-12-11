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
              <Route exact path="/*" element={<><Home /> <Layout /></>} />
                <Route index element={<><Home /> <Layout /></>} />
                  <Route path="about" element={<><About /> <Layout /></>} />
                  <Route path="contact" element={<><Contact /> <Layout /></>} />
                  <Route path="portfolio" element={<><Portfolio /> <Layout /></>} />
          </Routes>
        </>
    );
  }
}

export default App;
