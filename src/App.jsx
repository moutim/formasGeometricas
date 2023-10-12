import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className='main-container'>
        <Routes>
          <Route path='/' Component={ Home }/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
