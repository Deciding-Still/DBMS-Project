import React, { useState } from "react";
import AddProductForm from "./Addproduct";
import { IconSearch, IconMenu2 } from "@tabler/icons-react";
import Addemployee from "./Addemployee";
import axios from "axios";

const Employee = () => {
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
      .post("http://localhost:3001/users/all", userData, {
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
      <div className="font-semi-bold"></div>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add New Employee
      </button>
      {isOpen && (
        <div className="modal  ">
          <div className="modal-content ">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <Addemployee onSubmit={handleCloseModal} />
          </div>
        </div>
      )}
      <div className="  p-3 gap-1">
        <div className="container flex items-center justify-between  bg-slate-100 h-10 px-4 border-b border-gray-200 shadow-sm rounded-md">
          <div className="flex items-center gap">
            <span className="text-gray-400 cursor-pointer">
              <IconSearch size="16" color="currentColor" />
            </span>
            <input
              type="text"
              className="flex-grow h-full bg-transparent pl-4 focus:outline-none text-sm placeholder-gray-400"
              placeholder="Search for a Employee"
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
              <div className="font-medium">Username: {name.username}</div>
              <div className="font-medium ml-auto">Name: {name.Name}</div>
              <div className="font-medium ml-auto">Role: {name.role}</div>
              <div className="font-medium ml-auto">
                Branch Number: {name.bid}
              </div>
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

export default Employee;

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
