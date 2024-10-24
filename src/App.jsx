import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"; // Adjust the path as needed
import Footer from "./components/Footer"; // Adjust the path as needed
import Home from "./components/Home";
import About from "./components/About";
import Game from "./components/Game/Game";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
