"use client";

import { FacebookIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white">
      {/* Marquee banner */}
      <div className="bg-[#F44336] py-4 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="text-xl font-medium mx-4">Fresh fast delivered</span>
          <span className="text-xl font-medium mx-4">Fresh fast delivered</span>
          <span className="text-xl font-medium mx-4">Fresh fast delivered</span>
          <span className="text-xl font-medium mx-4">Fresh fast delivered</span>
          <span className="text-xl font-medium mx-4">Fresh fast delivered</span>
          <span className="text-xl font-medium mx-4">Fresh fast delivered</span>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <div className="bg-[#F44336] rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                  <path d="M7 2v20"></path>
                  <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">Nom<span className="text-[#F44336]">Nom</span></h2>
                <p className="text-sm text-gray-400">Swift delivery</p>
              </div>
            </div>
          </div>

          {/* NOMNOM section */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase tracking-wider text-sm">NOMNOM</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-[#F44336] transition-colors">Home</Link></li>
              <li><Link href="/contact" className="hover:text-[#F44336] transition-colors">Contact us</Link></li>
              <li><Link href="/delivery" className="hover:text-[#F44336] transition-colors">Delivery zone</Link></li>
            </ul>
          </div>

          {/* MENU section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-400 font-medium mb-4 uppercase tracking-wider text-sm">MENU</h3>
              <ul className="space-y-3">
                <li><Link href="/menu/appetizers" className="hover:text-[#F44336] transition-colors">Appetizers</Link></li>
                <li><Link href="/menu/salads" className="hover:text-[#F44336] transition-colors">Salads</Link></li>
                <li><Link href="/menu/pizzas" className="hover:text-[#F44336] transition-colors">Pizzas</Link></li>
                <li><Link href="/menu/main-dishes" className="hover:text-[#F44336] transition-colors">Main dishes</Link></li>
                <li><Link href="/menu/desserts" className="hover:text-[#F44336] transition-colors">Desserts</Link></li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <ul className="space-y-3 mt-10">
                <li><Link href="/menu/side-dish" className="hover:text-[#F44336] transition-colors">Side dish</Link></li>
                <li><Link href="/menu/brunch" className="hover:text-[#F44336] transition-colors">Brunch</Link></li>
                <li><Link href="/menu/desserts" className="hover:text-[#F44336] transition-colors">Desserts</Link></li>
                <li><Link href="/menu/beverages" className="hover:text-[#F44336] transition-colors">Beverages</Link></li>
                <li><Link href="/menu/fish-seafood" className="hover:text-[#F44336] transition-colors">Fish & Sea foods</Link></li>
              </ul>
            </div>
          </div>

          {/* FOLLOW US section */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase tracking-wider text-sm">FOLLOW US</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-[#F44336] transition-colors">
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-[#F44336] transition-colors">
                <InstagramIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom footer */}
        <div className="flex flex-wrap justify-between text-sm text-gray-400">
          <p>Copyright 2024 © Nomnom LLC</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms and conditoin</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}