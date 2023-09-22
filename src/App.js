
import './App.css';
import About from './components/about';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import Catalogue from './pages/catalogue';
import Cart from './components/cart';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom'


//create a Product component with a h5 for the title 
//render a <QuantityPicker/> inside of product
//use the product component in the catalogue and render it 5 times

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/about' element={<About />} />
      </Routes>
      
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
