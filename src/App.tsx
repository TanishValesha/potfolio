import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
// import Service from "./page/Service";
import Work from "./page/Work";
import Contact from "./page/Contact";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/service" element={<Service />} /> */}
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default App;