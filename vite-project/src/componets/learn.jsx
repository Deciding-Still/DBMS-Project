import React from 'react';
import { Link } from 'react-router-dom';

const LearnMorePage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 flex justify-between">
        <div className="text-white font-bold">Shop Management System</div>
        <div className="flex justify-center items-center">
          <Link to="/" className="text-white mr-8 hover:text-teal-400">
            Home
          </Link>
          <Link to="/about" className="text-white mr-8 hover:text-teal-400">
            About Us
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="h-screen flex">
        {/* Left Content */}
        <div className="w-1/2 bg-black px-10 py-20">
          <h1 className="text-white text-4xl font-bold mb-8">Learn More</h1>
          <p className="text-gray-300 leading-relaxed">
            Welcome to the "Learn More" section of our Shop Management System. Here, you can explore in-depth information about our comprehensive platform and its features.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Our system is designed to streamline various aspects of shop management, from customer relations to inventory tracking, sales record management, employee management and pricing.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            By leveraging modern database technologies and user-friendly interfaces, our project aims to simplify complex processes, enhance decision-making, and improve overall efficiency within retail operations.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            To know about the creators of the website, please go to the about us page.
          </p>
        </div>

        {/* Right Content */}
        
        <div className="w-1/2 bg-gray-900 px-10 py-20">
          <h2 className="text-white text-3xl font-bold mb-4">Features</h2>
          <ul className="text-gray-300 list-disc pl-6">
            <li>Customer Management</li>
            <li>Inventory Management</li>
            <li>Employee Management - Admin Exclusive</li>
            <li>Products Management</li>
            <li>Branch Management - Admin Exclusive</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LearnMorePage;