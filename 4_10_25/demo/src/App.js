import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import AboutUs from './AboutUs';
import Home from './Home';
import ContactUs from './ContactUs';

function App() {
  return (
    <BrowserRouter>
    <nav 
      style={{ 
        backgroundColor:'orange',
        color:'white',
        display:'flex',
        justifyContent:'center',
        padding:'20px'
      }}
    >
            
      <ul style={{
        listStyle:'none',
        display:'flex',
        gap:'20px'
      }}>

      <li> <Link to="/" style={{color:"black",textDecoration:'none'}}>Home</Link> </li>
      <li> <Link to="/AboutUs" style={{color:"black",textDecoration:'none'}}>About Us</Link> </li>
      <li> <Link to="/ContactUs" style={{color:"black",textDecoration:'none'}}>Contact Us</Link> </li>
      </ul>
    </nav>
    
    <div style={{padding:'20px',textAlign:'center'}}>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/ContactUs" element={<ContactUs></ContactUs>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
