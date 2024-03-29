// 
import React, { useState } from 'react';
import AddProductForm from './Addproduct';
import { IconHelp, IconSearch, IconMenu2 } from "@tabler/icons-react";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className=" pl-3 text-pretty ">
        Products
      </div>
      <button onClick={handleOpenModal} className=" pl-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add New Product
      </button>
      {isOpen && (
        <div className="modal  ">
          <div className="modal-content ">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <AddProductForm onSubmit={handleCloseModal} />
          </div>
        </div>
      )}
      <div className='  p-3 gap-1'>
      <div className="container flex items-center justify-between  bg-slate-100 h-10 px-4 border-b border-gray-200 shadow-sm rounded-md">
      <div className="flex items-center gap">
        <span className="text-gray-400 cursor-pointer">
          <IconSearch size="16" color="currentColor" />
        </span>
        <input
          type="text"
          className="flex-grow h-full bg-transparent pl-4 focus:outline-none text-sm placeholder-gray-400"
          placeholder="Search a Product"
        />
      </div>
      <div className="flex gap-3">
        <div>
          hello
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Products;
