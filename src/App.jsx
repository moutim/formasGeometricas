import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Forms from './pages/forms/Forms';
import CalculateCircle from './pages/calculateCircle/CalculateCircle';
import CalculatePyramid from './pages/calculatePyramid/CalculatePyramid';
import calculateRectangle from './pages/calculateRectangle/CalculateRectangle';
import calculateCircleAnnulus from './pages/calculateAnnulus/calculateAnnulus';
import calculateTrapezoid from './pages/calculateTrapezoid/CalculateTrapezoid';
import calculatePolygon from './pages/calculatePolygon/calculatePolygon';
import calculateSquare from './pages/calculateSquare/calculateSquare';
import calculateCircular from './pages/calculateCircular/calculateCircular';
import aboutUs from "./pages/aboutUs/aboutUs.jsx";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className='main-container'>
        <Routes>
          <Route path='/' Component={ Home }/>
          <Route path='/forms' Component={ Forms }/>
          <Route path='/aboutUs' Component={ aboutUs }/>
          <Route path='/circle' Component={ CalculateCircle }/>
          <Route path='/triangle' Component={ CalculatePyramid }/>
          <Route path='/rectangle' Component={ calculateRectangle }/>
          <Route path='/circle-annulus' Component={ calculateCircleAnnulus }/>
          <Route path='/circle-annulus' Component={ calculateCircleAnnulus }/>
          <Route path='/trapezoid' Component={ calculateTrapezoid }/>
          <Route path='/polygon' Component={ calculatePolygon }/>
          <Route path='/square' Component={ calculateSquare }/>
          <Route path='/circular' Component={ calculateCircular }/>

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
