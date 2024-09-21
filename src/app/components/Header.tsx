"use client";  // Mark this as a client component

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image'; // Using Next.js Image component

interface NavItem {
    name: string;
    href: string;
}

const Navbar = () => {
    // Define the dynamic nav items
    const navItems: NavItem[] = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#work' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Team', href: '#team' },
    ];

    // State to toggle the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu handler
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Disable scrolling when the menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        // Clean up when the component unmounts or isMenuOpen changes
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen]);

    return (
        <nav className="relative bg-[#070709] flex justify-between items-center p-4 text-white shadow-md h-84">
            {/* Left side: Logo */}
            <div className="flex items-center">
                <Image src="/logo.svg" alt="Logo" width={160} height={40} priority />
            </div>

            {/* Center: Nav items for web view */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <a key={item.name} href={item.href} className="text-white hover:text-gray-400">
                        {item.name}
                    </a>
                ))}
            </div>

            <div className="hidden md:flex space-x-4">
                <button className="px-4 py-2  text-white rounded-sm bg-purple-700 hover:bg-purple-800 transition">
                    Get Quote
                </button>
            </div>

            {/* Mobile View: Login and Menu Icon */}
            <div className="flex md:hidden items-center space-x-4">
                <button className="px-4 py-2  text-white rounded-sm bg-purple-700 hover:bg-purple-800 transition">
                    Get Quote
                </button>
                <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none hover:text-gray-300">
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Background blur when side sheet is open */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40" onClick={toggleMenu}></div>
            )}

            {/* Mobile Menu: Side Sheet (opens from right to left) */}
            <div className={`fixed top-0 z-50 right-0 h-full w-64 bg-[#070709] p-8 shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end">
                    <button onClick={toggleMenu} className="text-white rounded-lg text-2xl focus:outline-none hover:text-gray-300">
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="block text-white hover:text-gray-300 mb-4"
                        onClick={toggleMenu}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
