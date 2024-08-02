import { RiMenu4Fill } from "react-icons/ri";import { CgShoppingCart } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

import Logo from './Logo';

function PageNav() {
  // State to manage the visibility of the sidebar
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Function to show the sidebar
  function showSidebar() {
    setSidebarVisible(true);
  }

  // Function to hide the sidebar
  function hideSidebar() {
    setSidebarVisible(false);
  }

  return (
    <nav className="w-full text-xs font-extrabold tracking-wide">
      {/* Sidebar Menu */}
      <ul 
        className={`fixed top-0 right-0 h-screen w-64 z-50 shadow-lg transition-transform ${
          isSidebarVisible ? 'translate-x-0' : 'translate-x-full'
        } bg-gray-900 text-gray-300 backdrop-blur-lg p-4 flex flex-col`}
      >
        {/* Close Button */}
        <li onClick={hideSidebar} className="cursor-pointer">
          <a>
          <IoClose size={26}/>
          </a>
        </li>
        {/* Navigation Links */}
        <li>
          <NavLink to="home" onClick={hideSidebar} className="block py-2">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="shop" onClick={hideSidebar} className="block py-2">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="about" onClick={hideSidebar} className="block py-2">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="blog" onClick={hideSidebar} className="block py-2">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" onClick={hideSidebar} className="block py-2">
            Contact Us
          </NavLink>
        </li>
      </ul>
      {/* Top Navigation Bar */}
      <ul className="grid grid-cols-[.4fr_1fr] items-center justify-center sm:grid-cols-[.15fr_1fr] md:block">
        {/* Menu Button for Mobile */}
        <li className="block md:hidden" onClick={showSidebar}>
          <a href="#">
          <RiMenu4Fill  size={26}/>
          </a>
        </li>
        {/* Main Navigation Content */}
        <div className="flex items-center justify-between gap-6 border-gray-600 md:m-auto md:w-[85%]  ">
          <div>
               <li>
              <Logo />     
            </li>
          </div>
          <div className="flex gap-7">
            {/* Navigation Links for Desktop */}
            <li className="hidden md:block">
              <NavLink to="home" className="py-2">Home</NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink to="shop" className="py-2">Shop</NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink to="about" className="py-2">About Us</NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink to="blog" className="py-2">Blog</NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink to="contact" className="py-2">Contact Us</NavLink>
            </li>
          </div>
          {/* Cart Icon */}
          <div>
            <li className="flex cursor-pointer items-center justify-center">
            <CgShoppingCart size={20}/>      
                  </li>
          </div>
        </div>
      </ul>        
    </nav>        
  );
}
 
export default PageNav;
