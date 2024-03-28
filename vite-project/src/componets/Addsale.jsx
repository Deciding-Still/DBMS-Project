import React, { useState } from 'react';

const Addsale = () => {
  const [productName, setProductName] = useState('');
  const [branch, setBranch] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form submitted:', { productName, branch, description, quantity });
    // Clear form fields after submission
    setProductName('');
    setBranch('');
    setDescription('');
    setQuantity('');
  };

  return (
    <div className=' card w-96 bg-base-100 shadow-xl rounded-2xl bg-slate-300'>
      <h2 className='card-title'>Add New Sale</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Sale Name:</label>
          <input
            className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            className="input input-bordered rounded-2xl input-primary w-full max-w-xs"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="p-1 text-center">
          <button className="pl-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add Sale</button>
        </div>
      </form>
    </div>
  );
};

export default Addsale;
