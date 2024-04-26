import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Componats/Navbar';
import Card1 from './Componats/home';
import About from './Componats/About';
import Contactus from './Componats/Contactus';
import Login from './Componats/Login';
import Registaion from './Componats/Registaion';

function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Card1 />} className=""/>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/registaion" element={<Registaion />} />
      </Routes>
    </BrowserRouter>

  
    <div className="App flex justify-around mt-80">
   
   <Card1  bname1="View More" name="David Dell" fname="Full Stack devloper"/>
   <Card1  bname1="View More" name="Rse Bush" fname="Full Stack devloper"/>
   <Card1 bname1="View More"  name="Jones Gail" fname="Full Stack devloper"/>
  </div>

   
  {/* <Card1></Card1>
  <About></About>
  <Contactus></Contactus>
  <Login></Login>
  < Registaion></Registaion>
   */}
    
  


    </div>
  );
}

export default App;
