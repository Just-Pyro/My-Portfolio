import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div id="start-nav-reference">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
