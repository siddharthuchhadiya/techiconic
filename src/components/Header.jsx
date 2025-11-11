import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://tailwindcss.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-bold">Techiconic</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="hover:text-indigo-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-400">About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-indigo-400">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-indigo-400">Contact</Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div>
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
