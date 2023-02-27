import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Footer from './Components/Footer';
import Error from './pages/Error';

function App() {

  const routes = (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  )  

  return (
    <div className='App'>
    <Router>
        <Navbar/>
        <main>
          {routes}
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
