import React, { useState } from 'react';
import axios from 'axios';

const Addbranch = () => {
  const [bid, setbid] = useState('');
  const [branchname, setBranchName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    const branchData = {
      branchID: bid,
      branchName: branchname
    };

    axios.post('http://localhost:3001/branches/add', branchData, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error('Error during login:', error);
    });
    // Clear form fields after submission
    setbid('');
    setBranchName('');
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
            value={bid}
            onChange={(e) => setbid(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="branchname">Branch Name:</label>
        </div>
        <div>
          <input
            className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="text"
            id="branchname"
            value={branchname}
            onChange={(e) => setBranchName(e.target.value)}
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
