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
import FormGetter from "./pages/FormGetter";

import Timer from "./pages/Timer";
import { useContext } from "react";
import UserContext from "./components/ContextProvider";
import UseRefTimer from "./pages/UseRefTimer";
import StopWatch from "./pages/StopWatch";


function App() {
  let data = [
    {
      name: "Julius Alidon",
      age: 20
    },
    {
      name: "Ivana Alawi",
      age: 19
    }
  ];
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <UserContext.Provider value={data}>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
      {/* using it as a component */}
      <Route path="/classState" element={<ClassState/>}></Route>

      <Route path="/functionalUseState" element={<FunctionalState/>}></Route>
      <Route path="/basicFormHandling" element={<BasicFormHandling/>}></Route>
      <Route path="/FormHandlingUsingTwoComponents" element={<FormGetter/>}></Route>
      <Route path="/Timer" element={<Timer/>}></Route>
      <Route path="/UseRefTimer" element={<UseRefTimer/>}></Route>
      <Route path="/UseRefUseStateStopWatch" element={<StopWatch/>}></Route>
    </Routes>
    </UserContext.Provider>
    </BrowserRouter>
    
      <h1 className="text-warning">Hello World</h1>
    </>
    
  );
}

export default App;
