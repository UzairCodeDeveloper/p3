import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Myaimpage from './pages/Myaimpage';
import Skillspage from './pages/Skillspage';
import Projectpage from './pages/Projectpage';
function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Mylife' element={<Myaimpage/>}></Route>
            <Route path='/Skills' element={<Skillspage/>}></Route>
            <Route path='/projects' element={<Projectpage/>}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
