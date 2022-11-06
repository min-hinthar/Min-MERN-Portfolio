import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/index';
import Home from './components/Home/index'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}>
            </Route>
          </Route>
      </Routes>
    </>
  );
}

export default App;
