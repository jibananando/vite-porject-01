import React, { useState } from 'react';


const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <nav className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold">Logo</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/blog" className="hover:text-gray-300">Blog</a>
          <div className="relative">
            <button onClick={toggleDropdown} className="hover:text-gray-300 focus:outline-none">
              Dashboard
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 inline-block" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 17a1 1 0 0 1-.707-.293l-6-6a1 1 0 0 1 1.414-1.414L10 14.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-.707.293z" clipRule="evenodd" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute bg-gray-800 mt-2 w-36 right-0 rounded-lg shadow-lg z-10">
                <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-700">Dashboard</a>
                {!loggedIn ? (
                  <React.Fragment>
                    <a href="/login" className="block px-4 py-2 hover:bg-gray-700">Login</a>
                    <a href="/register" className="block px-4 py-2 hover:bg-gray-700">Register</a>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <a href="/profile" className="block px-4 py-2 hover:bg-gray-700">Profile</a>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-700 focus:outline-none">Logout</button>
                  </React.Fragment>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="block text-white hover:text-gray-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 9a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1 1zm1-7a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H4z" clipRule="evenodd" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute bg-gray-800 mt-2 w-36 right-0 rounded-lg shadow-lg z-10">
              <a href="/home" className="block px-4 py-2 hover:bg-gray-700">Home</a>
              <a href="/blog" className="block px-4 py-2 hover:bg-gray-700">Blog</a>
              <a href="/about" className="block px-4 py-2 hover:bg-gray-700">About</a>
              <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-700">Dashboard</a>
              {!loggedIn ? (
                <React.Fragment>
                  <a href="/login" className="block px-4 py-2 hover:bg-gray-700">Login</a>
                  <a href="/register" className="block px-4 py-2 hover:bg-gray-700">Register</a>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <a href="/profile" className="block px-4 py-2 hover:bg-gray-700">Profile</a>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-700 focus:outline-none">Logout</button>
                </React.Fragment>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
