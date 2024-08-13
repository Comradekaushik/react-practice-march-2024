import logo from './logo.svg';
import './App.css';
import About from './newComponents/about';
import Home from './newComponents/home';
import Data from './newComponents/data';
import Navbar from './newComponents/navbar';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, useLocation } from 'react-router-dom';

import Slider from "./components/Slider/Slider.js";

import "./styles.css";

export default function App() {


  

  
  return (

    

    
    
    // <BrowserRouter>
    //     <Navbar/>

        
        
    
    
        


    //     <Routes>
    //      <Route path='/' element={<Home text = "Abc" />} />
    //      <Route path='/about' element={<About text = "xyz"/>} />
    //      <Route path='/data' element={<Data/>} />
    //      <Route path='/about/component1' element={<About text = "component1"/>} />
    //     </Routes>
    
    // </BrowserRouter>


    <>
      <Slider />
    </>

 

   
      
    
    
  );
}




