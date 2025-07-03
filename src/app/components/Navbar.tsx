'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-4 md:px-32 py-3 flex items-center justify-between">
      
      <section className='flex gap-8'>
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/images/logo.svg" alt="Logo" width={48} height={48} className='md:w-[48px] md:h-[48px] h-[32px] w-[32px]'/>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center gap-8 ">
        <a href="#" className="text-[#FFD700]">Home</a>
        <a href="#" className="hover:text-gray-300">About us</a>
        <a href="#" className="hover:text-gray-300">Events</a>
        <a href="#" className="hover:text-gray-300">Give</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
      </section>

      {/* Social Icons */}
      <div className="hidden md:flex items-center gap-4 rounded-full border-[1px] border-[#292929] p-1">
        <Image src="/images/facebook.svg" alt="Facebook" width={28} height={28} />
        <Image src="/images/whatsapp.svg" alt="WhatsApp" width={28} height={28} />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-12 left-0  w-full min-h-screen text-center bg-black text-white flex flex-col items-start px-4 py-6 gap-4 md:hidden z-50">
          <a href="#" className="text-[#FFD700]">Home</a>
          <a href="#">About us</a>
          <a href="#">Events</a>
          <a href="#">Give</a>
          <a href="#">Contact</a>
          <div className="flex gap-4 pt-2">
            <Image src="/facebook-icon.png" alt="Facebook" width={20} height={20} />
            <Image src="/whatsapp-icon.png" alt="WhatsApp" width={20} height={20} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
