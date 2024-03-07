import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header}  from'./components/largeHeader/Header'
import { Introduction } from './components/introduction/Introduction';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import { AllProject } from './components/allProject/AllProject';
import { Contact } from './components/contact/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Introduction></Introduction>
      <About></About>
      <Experience></Experience>
      <AllProject></AllProject>
      <Contact></Contact>

      <Routes>
      {/* <Route path="/" element={<Introduction/>}></Route>
      <Route path="/" element={<About/>}></Route>
      <Route path="/" element={<Experience/>}></Route>
      <Route path="/" element={<AllProject/>}></Route>
      <Route path="/" element={<Contact/>}></Route> */}

     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
