import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About"
import Mission from "./components/Mission";
import Blog from "./components/Blog";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
