// 
import React, { useState } from 'react';
import AddProductForm from './Addproduct';
import { IconHelp, IconSearch, IconMenu2 } from "@tabler/icons-react";
import axios from 'axios';

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Data, setData] = useState("");
  const [List, setList] = useState([]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const set = () => {
    const userData = { Name: Data };
    axios
      .post("http://localhost:3001/products/all", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response.data[0].Name);
        setList(response.data);
      });
  };

  return (
    <>
      <div className=" pl-3 text-pretty ">
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
              placeholder="Search for a Product"
              id="Data"
              value={Data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>
          <button className="border-t-indigo-500" onClick={set}>
            Search
          </button>
        </div>
      </div>
      <div className="grid gap-4 md:gap-8">
        {List.map(
          (
            name,
            index // Changed from Name to Names
          ) => (
            <div
              key={index}
              className="justify-start p-4 rounded-lg bg-gray-100"
            >
              {/* <UserIcon className="h-6 w-6 mx-2" /> */}
              <div className="font-medium">Product ID: {name.productID}</div>
              <div className="font-medium ml-auto">Product Name: {name.productName}</div>
              <div className="font-medium ml-auto">Product Price: {name.productPrice}</div>
              <div className="font-medium ml-auto">Product Stock: {name.productStock}</div>

              {/* <button className="ml-auto rounded-full" size="icon" variant="ghost">
              <TrashIcon className="w-4 h-4 " />
            </button> */}
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Products;
