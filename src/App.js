import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Careers from "./pages/Careers";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
