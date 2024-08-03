import { RiMenu4Fill } from 'react-icons/ri';
import { CgShoppingCart } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

import { useState } from 'react';

import Logo from './Logo';

function PageNav() {
  // State to manage the visibility of the sidebar
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  function showSidebar() {
    setSidebarVisible(true);
  }

  function hideSidebar() {
    setSidebarVisible(false);
  }

  return (
    <nav className="w-full text-base font-medium tracking-wide text-gray-800">
      {/* Sidebar Menu */}
      <ul
        className={`fixed right-0 top-0 z-50 h-screen w-64 shadow-lg transition-transform ${
          isSidebarVisible ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col bg-indigo-950 p-4 text-gray-300 backdrop-blur-lg`}
      >
        {/* Close Button */}
        <li onClick={hideSidebar} className="mb-3 cursor-pointer">
          <a>
            <IoClose size={26} />
          </a>
        </li>
        {/* Navigation Links */}
        <li>
          <NavLink
            to="home"
            onClick={hideSidebar}
            className={({ isActive }) =>
              `block py-2 ${isActive && 'text-orange-500'}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="shop"
            onClick={hideSidebar}
            className={({ isActive }) =>
              `block py-2 ${isActive && 'text-orange-500'}`
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            onClick={hideSidebar}
            className={({ isActive }) =>
              `block py-2 ${isActive && 'text-orange-500'}`
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="blog"
            onClick={hideSidebar}
            className={({ isActive }) =>
              `block py-2 ${isActive && 'text-orange-500'}`
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            onClick={hideSidebar}
            className={({ isActive }) =>
              `block py-2 ${isActive && 'text-orange-500'}`
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Top Navigation Bar */}
      <ul>
        {/* Main Navigation Content */}
        <div className="flex items-center justify-between">
          <div>
            <li>
              <Logo />
            </li>
          </div>

          <div className="flex gap-7">
            {/* Navigation Links for Desktop */}
            <li className="hidden md:block">
              <NavLink
                to="home"
                className={({ isActive }) =>
                  `py-2 ${isActive && 'text-orange-500'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink
                to="shop"
                className={({ isActive }) =>
                  `py-2 ${isActive && 'text-orange-500'}`
                }
              >
                Shop
              </NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `py-2 ${isActive && 'text-orange-500'}`
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink
                to="blog"
                className={({ isActive }) =>
                  `py-2 ${isActive && 'text-orange-500'}`
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `py-2 ${isActive && 'text-orange-500'}`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </div>

          <div className="flex items-center space-x-3">
            {/* Login Icon */}
            <li className="cursor-pointer">
              <NavLink
                to="login "
                className="flex items-center justify-center space-x-1"
              >
                <BsPerson size={20} />
                <span className="hidden sm:block">Login</span>
              </NavLink>
            </li>
            {/* Search Icon */}
            <li className="flex cursor-pointer items-center justify-center space-x-1">
              <FiSearch size={20} />
              <span className="hidden sm:block">Search</span>
            </li>
            {/* Cart Icon */}
            <li className="cursor-pointer">
              <NavLink
                to="cart"
                className={({ isActive }) =>
                  `flex items-center justify-center space-x-1 ${isActive && 'text-orange-500'}`
                }
              >
                <CgShoppingCart size={20} />
                <span className="hidden sm:block">Cart</span>
              </NavLink>
            </li>
            {/* Menu Button for Mobile */}
            <li className="block md:hidden" onClick={showSidebar}>
              <a href="#">
                <RiMenu4Fill size={26} />
              </a>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default PageNav;
