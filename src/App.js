import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Introduction } from './pages/introduction/Introduction';
import { Experience } from './pages/experience/Experience';
import { AllProject } from './pages/allProject/AllProject';
import { Recommend } from './pages/recommended/Recommend';
import { Contact } from './pages/contact/Contact';
import { About } from './pages/about/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route index element={<Introduction />} />
          <Route path='about' element={<About />} />
          <Route path='experience' element={<Experience />} />
          <Route path='project' element={<AllProject />} />
          <Route path='recommended' element={<Recommend />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Experience />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}


export default App;
