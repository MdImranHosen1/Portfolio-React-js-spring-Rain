import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header}  from'./components/largeHeader/Header'
import { Introduction } from './components/introduction/Introduction';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import { AllProject } from './components/allProject/AllProject';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Introduction></Introduction>
      <About></About>
      <Experience></Experience>
      <AllProject></AllProject>
      <Routes>
    
     {/* <Route path="/" element={<Layout />}></Route> */}
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
