import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link> {"       "}
        <Link to='/about'>About</Link>{"       "}
        <Link to='/jobs'>Jobs</Link>{"       "}
        <Link to='/contact'>Contact</Link>{"       "}


      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/jobs' element={<Jobs/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

      </Routes>
      <footer>
        <div>This is Footer</div>
      </footer>
    </Router>
  );
}

export default App;
