import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Customer from "./Customer";

const Addemployee = () => {
  const [EmployeeName, setEmployeeName] = useState("");
  const [branch, setBranch] = useState("");
  const [Password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    const userData = {
      username: username,
      Name: EmployeeName,
      password: Password,
      role: role,
      bid: branch
    };

    axios.post('http://localhost:3001/users/add', userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error('Error during login:', error);
    });

    // Clear form fields after submission
    setEmployeeName("");
    setBranch("");
    setPassword("");
    setUserName("");
    setRole("");
  };

  return (
    <div className=" card w-96 bg-base-100 shadow-xl rounded-2xl bg-slate-300">
      <h2 className="card-title">Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Username">Username:</label>
        </div>
        <div>
          <input
            className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="EmpName">Name:</label>
        </div>
        <div>
          <input
            className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="text"
            id="Name"
            value={EmployeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="Password">Password:</label>
        </div>
        <div>
          <input
            className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="text"
            id="pass"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="Role">Role:</label>
        </div>
        <div>
          <input
            className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="Branch">Branch:</label>
        </div>
        <div>
          <input
            className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="number"
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          />
        </div>

        <div className="p-1 text-center">
          <button
            className="pl-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addemployee;
