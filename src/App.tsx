import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Pages/Projects";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
