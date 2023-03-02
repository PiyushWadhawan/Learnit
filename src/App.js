import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Footer from './Components/Footer';
import Error from './pages/Error';
import OurStory from './pages/OurStory';
import Courses from './pages/Courses';
import Signup from './pages/Signup';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';

function App() {

  const routes = (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/OurStory" element={<OurStory/>}/>
      <Route path="/Courses" element={<Courses/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/FAQs" element={<FAQs/>}/>
      <Route path="/Contact" element={<Contact/>}/>
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
