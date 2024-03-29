import React, { useState } from 'react';

const Addbranch = () => {
  const [bid, setbid] = useState('');
  const [branch, setBranch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form submitted:', { productName, branch, description, quantity });
    // Clear form fields after submission
    setbid('');
    setBranch('');
  };

  return (
    <div className=' card w-96 bg-base-100 shadow-xl rounded-2xl bg-slate-300'>
      <h2 className='card-title'>Add New Branch</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="bid">Branch ID:</label>
        </div>
        <div>
          <input
            className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="positive"
            id="bid"
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

        <div className="p-1 text-center">
          <button className="pl-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add branch</button>
        </div>
      </form>
    </div>
  );
};

export default Addbranch;
