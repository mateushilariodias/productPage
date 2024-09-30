'use client'

import Link from "next/link";

function Footer() {

    return (
        <footer className="bg-white flex flex-row justify-between items-center w-full py-3 px-4 lg:py-16 lg:px-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 text-left">
                <div>
                    <h4 className="text-xl font-bold">Home</h4>
                    <Link href=''><p>Store</p></Link>
                    <Link href=''><p>About</p></Link>
                    <Link href=''><p>Blog</p></Link>
                    <Link href=''><p>Point of Sale</p></Link>
                </div>
                <div>
                    <h4 className="text-xl">810, Bay Area,<br />San Francisco, CA 94158</h4>
                    <Link href=''><p>Email: info@newbrand-shop.com</p></Link>
                    <Link href=''><p>Call: 1-100-000-0000</p></Link>
                </div>
                <div>
                    <h4 className="text-xl">Shipping & Returns</h4>
                    <Link href=''><p>FAQ</p></Link>
                    <div className="flex flex-row gap-4">
                    <Link href=''><p>Twitter</p></Link>
                    <Link href=''><p>Facebook</p></Link>
                    <Link href=''><p>Instagram</p></Link>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl">Receive all our news and updates</h4>
                    <input type="email" placeholder="Email Address" className="border p-2 w-full" />
                    <button className="mt-4 px-8 py-3 border-2 border-black font-bold">Subscribe Now</button>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
