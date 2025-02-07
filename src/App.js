import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About"
import Mission from "./components/Mission";
import Blog from "./components/Blog";
import Footer from "./components/Footer"
import Login from "./components/Login";

import './App.css';
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
