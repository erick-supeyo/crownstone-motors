

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        {/* navbar goes here  */}
        <Navbar/>

        <header className="App-header">
         <div className="marquee">
  <h1>🤗 Welcome to Crownstone Motors 🤗</h1>
</div>
        </header>


        {/* nav links */}
        <nav className='text-center'>
          <Link to="/signup" className='btn btn-warning btn-sm m-1'>Signup🤩</Link>
          <Link to="/signin" className='btn btn-warning btn-sm m-1'>Signin😎</Link>
          <Link to="/addproduct" className='btn btn-warning btn-sm m-1' >Addproduct🚘</Link>
          <Link to="/" className='btn btn-warning btn-sm m-1' >Getproduct🤑</Link>
        </nav>

        {/* routes */}
        <Routes>
          <Route path='/' element={<Getproduct />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='/makepayment' element={<Mpesapayment />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
