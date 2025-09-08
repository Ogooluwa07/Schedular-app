import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import logo from "../assets/logo.jpg"; 

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
          <span className="font-semibold text-lg text-gray-800">
            Samuel Ojo Mechanical
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline text-gray-700">
            Home
          </Link>
          <Link to="/schedule" className="hover:underline text-gray-700">
            Schedule
          </Link>
        </div>
      </div>
    </nav>
  );
}
