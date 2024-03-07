import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Header } from './components/header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      {/* <Routes>
      <Route path="/" element={ <Header />}/>
      </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
