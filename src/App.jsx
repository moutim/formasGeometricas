import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className='main-container'>
        <Routes>
          <Route path='/' Component={ Home }/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
