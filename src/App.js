import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header}  from'./components/largeHeader/Header'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
    
     {/* <Route path="/" element={<Layout />}></Route> */}
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
