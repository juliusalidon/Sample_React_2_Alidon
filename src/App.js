import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ContactUs from "./pages/contactus";
import AboutUs from "./pages/aboutus";
import BasicFormHandling from "./pages/BasicFormHandling";

// importing Class State
import ClassState from "./pages/ClassState";

import FunctionalState from "./pages/FunctionalState";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
      {/* using it as a component */}
      <Route path="/classState" element={<ClassState/>}></Route>

      <Route path="/functionalUseState" element={<FunctionalState/>}></Route>
      <Route path="/basicFormHandling" element={<BasicFormHandling/>}></Route>
    </Routes>
      
    </BrowserRouter>
    
      <h1 className="text-warning">Hello World</h1>
    </>
    
  );
}

export default App;
