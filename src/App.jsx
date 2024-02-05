import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import Company from "./Pages/Company";
import Locations from "./Pages/Locations";
import Contact from "./Pages/Contact";
import WebDesign from "./Pages/WebDesign";
import AppDesign from "./Pages/AppDesign";
import GraphicDesign from "./Pages/GraphicDesign";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Homepage} index />
          <Route path="/about" Component={Company} />
          <Route path="/locations" Component={Locations} />
          <Route path="/contact" Component={Contact} />
          <Route path="/web-design" Component={WebDesign} />
          <Route path="/app-design" Component={AppDesign} />
          <Route path="/graphic-design" Component={GraphicDesign} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
