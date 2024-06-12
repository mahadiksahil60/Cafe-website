"use client"
import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar  p-4 shadow-lg text-black " style={{backgroundImage: 'url("/navbarbg.jpg")'}} >
      <div className="flex-1">
        <Image className='border-2 border-white rounded-full hover:border-black' src={logo} width={60} height={100} alt="lgo here"/>
      </div>
      <div className="flex-none lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-ghost"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <div className={`flex-1 ${isOpen ? 'block' : 'hidden'} lg:flex  lg:items-center lg:justify-end`}>
        <ul className={`menu p-1 lg:menu-horizontal text-lg font-bold font-serif lg:p-0 ${isOpen ? 'flex flex-col' : ''}`}>
          <li><a className=' text-white'>Home</a></li>
          <li><a className=' text-white'>Menu</a></li>
          <li><a className=' text-white'>About us</a></li>
          <li><a className=' text-white'>Contact us</a></li>
          
        </ul>
      </div>
    </nav>
  );
}
