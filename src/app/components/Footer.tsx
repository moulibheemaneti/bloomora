"use client";  // Mark this as a client component

import Image from 'next/image'; // Using Next.js Image component
import Link from 'next/link';

const Footer = () => {
    return (
        <nav className="relative bg-[#070709] flex justify-between items-center p-4 text-white h-84 shadow-[0px_-4px_24px_0px_#FFFFFF1F]">
            {/* Left side: Logo */}
            <div className="flex items-center">
                <Image src="/logo.svg" alt="Logo" width={160} height={40} priority />
            </div>

            {/* Center: Nav items for web view */}
            <div className="hidden md:flex space-x-8">
                <Link href="/">Terms of Service</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">© 2024 Bloomora.design. All rights reserved.</Link>
            </div>
        </nav>
    );
};

export default Footer;
