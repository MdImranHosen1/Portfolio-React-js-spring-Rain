import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header}  from'./components/largeHeader/Header'
import { Introduction } from './components/introduction/Introduction';
import { About } from './components/about/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Introduction></Introduction>
      <About></About>
      <Routes>
    
     {/* <Route path="/" element={<Layout />}></Route> */}
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
