import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';
import GlassForm from './GlassForm';
import { ReactTyped } from 'react-typed';

const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-black h-screen overflow-hidden">
        <nav className="bg-gray-800 p-4 flex justify-end">
          <div className="flex justify-center items-center">
            <a href="#" className="text-white mr-8 hover:text-teal-400 ">Home</a>
            <a href="#" className="text-white mr-8 hover:text-teal-400 ">Contacts</a>
            <a href="#" className="text-white mr-8 hover:text-teal-400 ">About Us</a>
              <GlassForm isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </nav>
        <div className="h-screen flex">
          <div className=" w-1/3 bg-black px-10 py-40">
              <h1 className="text-white text-6xl font-extrabold"><ReactTyped
        strings={['SHOP MANAGEMENT SYSTEM', 'ALL FOR ONE, ONE FOR ALL']}
        typeSpeed={100} // Adjust typing speed in milliseconds
        backSpeed={80} // Adjust backspace speed (for loop animations)
        loop // Set to true for continuous looping
        className="text-white text-6xl font-bold" // Add Tailwind CSS classes
      /></h1>
            <div className=' text-white py-10 font-extralight'>In the realm of retail, efficient management of shop-related data is indispensable for maintaining operational effectiveness and meeting customer demands. Our Shop Management System project endeavors to address this need by offering a comprehensive solution designed to streamline various aspects of shop management.
              The purpose of our project is to develop a centralized platform that integrates key functionalities such as customer relations, inventory tracking, sales record management, employee management, pricing, and feedback mechanisms. By leveraging modern database technologies and user-friendly interfaces, our project aims to simplify complex processes, enhance decision-making, and improve overall efficiency within retail operations.
            </div>
            <div className=' flex px-11'>
              <button className="text-white bg-transparent border border-teal-600 rounded-xl px-3 py-2 hover:bg-teal-200 hover:text-gray-800">Learn more</button>
            </div>
          </div>
          

          {/* Right half content */}
          <div className="w-2/3 bg-black text-white">
            <Spline scene="https://prod.spline.design/Mbhfsh5A9BrPoBK4/scene.splinecode" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage
