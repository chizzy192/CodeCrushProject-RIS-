import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Resources from "./Resources";
import HRLoginScreen from "./HrSystemLogin";
import RISDashboard from "./RISDashboard";
import LandingPage from "./LandingPage";
import About from "./About";
import ContactUs from "./ContactUs"
import HRLoginAdmin from "./HRLoginAdmin";

function AllRoutes() {
  return (
    <div>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/hr-login" element={<HRLoginScreen />} />
          <Route path="/ris-dashboard" element={<RISDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/hr-admin-login" element={<HRLoginAdmin/>}/>
        </Routes>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default AllRoutes;
