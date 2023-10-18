import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Forms from './pages/forms/Forms';
import CalculateCircle from './pages/calculateCircle/CalculateCircle';
import CalculatePyramid from './pages/calculatePyramid/CalculatePyramid';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className='main-container'>
        <Routes>
          <Route path='/' Component={ Home }/>
          <Route path='/forms' Component={ Forms }/>
          <Route path='/circle' Component={ CalculateCircle }/>
          <Route path='/triangle' Component={ CalculatePyramid }/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
