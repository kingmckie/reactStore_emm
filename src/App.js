
import './App.css';
import About from './components/about';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import Catalogue from './pages/catalogue';
import Admin from './components/admin';
import Cart from './components/cart';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalState from './store/globalState';


//create a Product component with a h5 for the title 
//render a <QuantityPicker/> inside of product
//use the product component in the catalogue and render it 5 times

function App() {
  return (
    <div className="App">
     <GlobalState>
     <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<Admin />} />
        
      </Routes>
      
      <Footer/>
     </BrowserRouter>

     </GlobalState>
    </div>
  );
}

export default App;
