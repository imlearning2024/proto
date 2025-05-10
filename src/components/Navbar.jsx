//
// import React from "react";
// import { NavLink , Link} from "react-router-dom";
//
//
// const Navbar = () => {
//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "text-green-200 font-semibold"
//       : "hover:text-green-200";
//
//   return (
//     <nav className="bg-green-600 text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo / Site Name */}
//         <NavLink to="/" className="text-2xl font-bold text-white">
//           Pollution Reporter
//         </NavLink>
//
//         {/* Nav Links */}
//                 <div className="space-x-4 hidden md:flex">
//                     <NavLink to="/" className={linkClass}>Home</NavLink>
//                     <NavLink to="/UserDashboard" className={linkClass}>Dashboard</NavLink>
//                     <NavLink to="/ngo/dashboard" className={linkClass}>NGO</NavLink>
//                     <NavLink to="/login" className={linkClass}>User Login</NavLink>
//                     <NavLink to="/NGOLogin" className={linkClass}>NGO Login</NavLink>
//                     <Link to="/report" className="hover:text-green-200">Report Issue</Link>
//                     <NavLink to="/about" className={linkClass}>About</NavLink>
//                 </div>
//
//         {/* Mobile Menu Placeholder */}
//         <div className="md:hidden">
//           {/* Future mobile menu */}
//         </div>
//       </div>
//     </nav>
//   );
// };
//
// export default Navbar;


import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional icon lib (or use emoji/icons)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-200 font-semibold block px-3 py-2"
      : "hover:text-green-200 block px-3 py-2";

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-white">
          Pollution Reporter
        </NavLink>

        {/* Desktop Nav */}
        <div className="space-x-4 hidden md:flex">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/UserDashboard" className={linkClass}>Dashboard</NavLink>
          <NavLink to="/ngo/dashboard" className={linkClass}>NGO</NavLink>
          <NavLink to="/login" className={linkClass}>User Login</NavLink>
          <NavLink to="/NGOLogin" className={linkClass}>NGO Login</NavLink>
          <Link to="/report" className="hover:text-green-200 block px-3 py-2">Report Issue</Link>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" className={linkClass} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/UserDashboard" className={linkClass} onClick={toggleMenu}>Dashboard</NavLink>
          <NavLink to="/ngo/dashboard" className={linkClass} onClick={toggleMenu}>NGO</NavLink>
          <NavLink to="/login" className={linkClass} onClick={toggleMenu}>User Login</NavLink>
          <NavLink to="/NGOLogin" className={linkClass} onClick={toggleMenu}>NGO Login</NavLink>
          <Link to="/report" className="hover:text-green-200 block px-3 py-2" onClick={toggleMenu}>Report Issue</Link>
          <NavLink to="/about" className={linkClass} onClick={toggleMenu}>About</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
