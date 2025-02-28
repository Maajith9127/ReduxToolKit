import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = useSelector((state) => state.MyFirstCartslicer);
  const no = cart.value.length;

  return (
    <div className='relative sticky z-50 top-0 bg-white shadow-md'>
      <div className='flex justify-between items-center px-6 lg:px-12 py-4 border-b border-gray-200'>
        <h1 className='font-bold text-indigo-700 text-2xl sm:text-3xl tracking-tight'>
          MyRedux Toolkit
        </h1>

        <div className='hidden md:flex items-center gap-8'>
          <Link to='/' className='text-gray-700 font-medium hover:text-indigo-600 transition duration-200'>
            Products
          </Link>
          <Link to='/Login' className='text-gray-700 font-medium hover:text-indigo-600 transition duration-200'>
            Login
          </Link>
          <Link to='/Register' className='text-gray-700 font-medium hover:text-indigo-600 transition duration-200'>
            Register
          </Link>
          <Link to='/trial' className='relative text-gray-700 font-medium hover:text-indigo-600 transition duration-200 flex items-center'>
            Cart
            <span className='ml-2 bg-indigo-600 text-white text-sm font-bold rounded-full px-2 py-1'>
              {no}
            </span>
          </Link>
        </div>

        <div className='md:hidden'>
          <button
            className='w-8 h-8 relative flex items-center justify-center focus:outline-none'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
          >
            <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
              <span className='line line-1'></span>
              <span className='line line-2'></span>
              <span className='line line-3'></span>
            </div>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className='flex flex-col py-3 px-6'>
          <Link to='/' className='mobile-link' onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to='/Login' className='mobile-link' onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to='/Register' className='mobile-link' onClick={() => setMenuOpen(false)}>Register</Link>
          <Link to='/trial' className='mobile-link flex items-center' onClick={() => setMenuOpen(false)}>
            Cart
            <span className='ml-2 bg-indigo-600 text-white text-sm font-bold rounded-full px-2 py-1'>
              {no}
            </span>
          </Link>
        </div>
      </div>

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
          transition: transform 0.25s ease-in-out, opacity 0.1s ease-in-out;
        }
        .line-1 { top: 0; }
        .line-2 { top: 9px; width: 75%; }
        .line-3 { top: 18px; }
        .hamburger.active .line-1 { transform: rotate(45deg); top: 9px; }
        .hamburger.active .line-2 { opacity: 0; width: 0; }
        .hamburger.active .line-3 { transform: rotate(-45deg); top: 9px; }
        .mobile-menu {
          position: absolute;
          z-index: 10;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
        }
        .mobile-menu.active { max-height: 250px; }
        .mobile-link {
          display: block;
          padding: 12px;
          font-weight: 500;
          color: #374151;
          transition: color 0.2s ease-in-out;
        }
        .mobile-link:hover { color: #4338ca; background: #f9fafb; }
      `}</style>
    </div>
  );
};

export default Navbar;