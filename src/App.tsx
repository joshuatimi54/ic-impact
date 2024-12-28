import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Signup from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
