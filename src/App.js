import './App.css';
import React from "react";
import { Routes, Route} from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Login from './components/Login/Login';
import Header from './components/Header';
import Footer from "./components/Footer";
import Best from './components/Product/Best';
import Top from './components/Product/Top';
import Shirt from './components/Product/Shirt';
import Pants from './components/Product/Pants';
import Signup from './components/Signup/Signup';
import Main from "./page/Main";
import Basket from './page/Basket';


function App() {
 
  return (
    <div className="App">
      <div className='black-nav'>
        <Header></Header>
        </div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Main" element={<Main/>} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/Best" element={<Best />} />
        <Route path="/Top" element={<Top />} />
        <Route path="/Shirt" element={<Shirt />} />
        <Route path="/Pants" element={<Pants />} />
        
       
        
      </Routes>
      
    <Footer></Footer>
       
    </div>
  );
}

export default App;