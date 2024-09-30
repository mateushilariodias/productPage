'use client'

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";

function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header className="flex flex-row justify-between items-center w-full py-3 px-4 lg:py-16 lg:px-28">
            <div className="flex flex-row justify-center items-center gap-6">
                <div className="text-black">
                    <strong className="text-xl lg:text-2xl">NEWBRAND</strong>
                </div>
            </div>
            <nav className="hidden lg:flex lg:flex-row gap-12 text-xl text-black">
                <ul className="flex space-x-14 text-lg items-center">
                    <li><Link href="#"><strong>Home</strong></Link></li>
                    <li><Link href="#">Store</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Point of Sale</Link></li>
                    <li><Link href="#" className="w-6 h-6"><FaShoppingCart /></Link></li>
                </ul>
            </nav>
            <div className="flex flex-row gap-4 lg:hidden text-black items-center">
                <Link href="#" className="w-5 h-5"><FaShoppingCart /></Link>
                <FaBars onClick={() => setShowMobileMenu(true)} className="h-5 w-5 cursor-pointer" />
            </div>
            {showMobileMenu && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-start text-gray-600">
                    <div className="bg-white p-4 w-full max-w-sm mx-auto">
                        <div className="flex justify-end">
                            <FaTimes onClick={() => setShowMobileMenu(false)} className="cursor-pointer h-8 w-8 text-black" />
                        </div>
                        <nav className="flex flex-col text-xl text-black text-center">
                            <ul className="flex flex-col gap-6 justify-center">
                                <li><Link href="#"><strong>Home</strong></Link></li>
                                <li><Link href="#">Store</Link></li>
                                <li><Link href="#">About</Link></li>
                                <li><Link href="#">Blog</Link></li>
                                <li><Link href="#">Point of Sale</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}
export default Header;