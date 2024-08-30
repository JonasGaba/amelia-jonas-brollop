import MenuBar from './components/MenuBar'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Info  from './components/Info';
import  ToastMaster from './components/ToastMaster';
import  AboutUs from './components/AboutUs';
import  Home  from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuBar />}>
            <Route exact path = "/" element={<Home />} />
            <Route path="info" element={<Info />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="toastmaster" element={<ToastMaster />} />
          </Route>

        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
