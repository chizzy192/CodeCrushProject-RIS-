
import { useState } from 'react';
import RISLogo from "../assets/RISLogo.png"
import { NavLink } from 'react-router-dom';
function Navbar() {
const [menuOpen, setMenuOpen]  = useState(false);

  return (
    <nav className=" flex w-full shadow:sticky top-0 justify-between align-middle bg-blue-900 ">
      <div className=" items-start ">
        <img src={RISLogo} alt="Company Logo" className="mx-5 my-3" style={{ width: '150.58px', height: '56.4px', top: '6px', left: '21px' }} />
       </div>
        <div className="menu" onClick={() => {setMenuOpen(!menuOpen);}}>
          <span></span>
          <span></span>
          <span></span>
        </div> 
    
      
          <ul className= {menuOpen ? "open" : ""}>
          <div className="flex w-full mx-auto nav-container px-4 gap-20 py-4 justify-center items-center align-middle ">
          
          <ul className="flex flexbox flex-row flex-wrap text-center w-auto ">
            <li className="text-white py-2 hover:underline active:bg-white active:text-black rounded-lg active:no-underline "><NavLink to="/">Home</NavLink></li>
            <li className="text-white py-2  hover:underline active:bg-white active:text-black rounded-lg active:no-underline "><NavLink to="/about">About</NavLink></li>
            <li className="text-white py-2  hover:underline active:bg-white active:text-black rounded-lg active:no-underline"><NavLink to="/resources">Resources</NavLink></li>
            <li className="text-white py-2  hover:underline active:bg-white active:text-black rounded-lg active:no-underline"><NavLink to="/contact">Contact Us</NavLink></li>
            <li className="text-white py-2  hover:underline active:bg-white active:text-black rounded-lg active:no-underline">Pricing</li>
            </ul>
            <ul className="flex flexbox flex-wrap w-auto text-center">
          <li className="text-white py-2  hover:underline active:bg-white active:text-black rounded-lg active:no-underline"><NavLink to="/signup">Sign Up</NavLink></li>
          <li className=" bg-white text-black    hover:underline active:bg-black active:text-white  active:no-underline px-4 py-2 rounded-lg">Request for Free Trial</li>
        </ul>
          
      
          
          </div>
          </ul>
          
      
      
      
     
    </nav>
  );
}
 
export default Navbar;