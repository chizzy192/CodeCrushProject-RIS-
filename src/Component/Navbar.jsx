import React from 'react';
import RISLogo from "../assets/RISLogo.png"
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="flex items-center flexbox flex-wrap justify-between bg-blue-900 h-20 px-4">
      <div className="flex items-center">
        <img src={RISLogo} alt="Company Logo" className="h-10 mr-4" style={{ width: '150.58px', height: '56.4px', top: '6px', left: '21px' }} />
          <div className="flex flexbox flex-wrap">
          <ul className="flex flexbox  flex-wrap ">
            <li className="text-white mr-10 hover:underline active:bg-white active:text-black rounded-lg active:no-underline "><Link to="/">Home</Link></li>
            <li className="text-white mr-10 hover:underline active:bg-white active:text-black rounded-lg active:no-underline "><Link to="/about">About</Link></li>
            <li className="text-white mr-10 hover:underline active:bg-white active:text-black rounded-lg active:no-underline"><Link to="/resources">Resources</Link></li>
            <li className="text-white mr-10 hover:underline active:bg-white active:text-black rounded-lg active:no-underline"><Link to="/contact">Contact Us</Link></li>
            <li className="text-white mr-10 hover:underline active:bg-white active:text-black rounded-lg active:no-underline"><Link to="pricing">Pricing</Link></li>
          </ul>
          </div>
        
      </div>
      <div className="flex items-center">
        <ul>
          <li className="text-white mr-8"><Link to="/signup">Sign Up</Link></li>
        </ul>
        <div className="bg-white text-black px-4 py-2 rounded-lg">
          <ul><li className="text-black"><Link to="/freetrial">Request for Free Trial</Link></li></ul>
          
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;