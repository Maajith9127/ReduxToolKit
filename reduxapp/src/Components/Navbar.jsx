import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const cart = useSelector((state)=>state.MyFirstCartslicer)

console.log("Hi I am Navbar")
console.log(cart.value.length)
const no=cart.value.length
  return (
    <div className='relative sticky top-0'>
      {/* Main Navbar */}
      <div className='flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-5 bg-white border-b border-gray-200 shadow-sm mb-6'>
        <h1 className='font-bold text-indigo-600 text-2xl sm:text-3xl tracking-tight'>
          MyRedux Toolkit
        </h1>
        
        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-6 lg:gap-8'>
          <Link 
            to="/" 
            className='text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200 px-2 py-1'
          >
            Products
          </Link>
          <Link 
            to="/trial" 
            className='text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200 px-2 py-1'
          >
            Cart
            <span className=' ml-3 font-bold text-indigo-600   rounded-[100%] p-2'>
             {no}

            </span>
          </Link>
        </div>
        
        {/* Refined Hamburger Button */}
        <div className='md:hidden'>
          <button 
            className='w-8 h-8 relative focus:outline-none flex items-center justify-center'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown with Refined Animation */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className='flex flex-col py-2'>
          <Link 
            to="/" 
            className='mobile-link'
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            to="/trial" 
            className='mobile-link'
            onClick={() => setMenuOpen(false)}
          >
            Cart 
          </Link>
        </div>
      </div>

      {/* Embedded CSS for refined animations */}
      <style jsx>{`
        .hamburger {
          width: 24px;
          height: 20px;
          position: relative;
          cursor: pointer;
        }
        
        .line {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: #4338ca;
          border-radius: 2px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: transform 0.25s ease-in-out, top 0.25s ease-in-out 0.25s, opacity 0.1s ease-in-out 0.15s;
        }
        
        .line-1 {
          top: 0px;
        }
        
        .line-2 {
          top: 9px;
          width: 75%;
          right: 0;
          left: auto;
        }
        
        .line-3 {
          top: 18px;
        }
        
        .hamburger:hover .line {
          background: #4f46e5;
        }
        
        .hamburger.active .line {
          transition: transform 0.25s ease-in-out 0.25s, top 0.25s ease-in-out, opacity 0.1s ease-in-out 0.15s;
        }
        
        .hamburger.active .line-1 {
          top: 9px;
          transform: rotate(45deg);
        }
        
        .hamburger.active .line-2 {
          opacity: 0;
          width: 0;
        }
        
        .hamburger.active .line-3 {
          top: 9px;
          transform: rotate(-45deg);
        }
        
        .mobile-menu {
          position: absolute;
          z-index: 10;
          top: 100%;
          left: 0;
          right: 0;
          background-color: white;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .mobile-menu.active {
          max-height: 200px;
        }
        
        .mobile-link {
          display: block;
          padding: 12px 24px;
          color: #374151;
          font-medium: 500;
          transition: all 0.2s ease;
          transform: translateX(-10px);
          opacity: 0;
        }
        
        .mobile-menu.active .mobile-link {
          transform: translateX(0);
          opacity: 1;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transition-delay: 0.1s;
        }
        
        .mobile-menu.active .mobile-link:nth-child(2) {
          transition-delay: 0.15s;
        }
        
        .mobile-link:hover {
          background-color: #f9fafb;
          color: #4338ca;
        }
      `}</style>
    </div>
  )
}

export default Navbar