import axios from 'axios';
import React, { useState } from 'react';

const Addsale = () => {
  const [salesID, setsalesID] = useState('');
  const [productID, setproductID] = useState('');
  const [customerID, setcustomerID] = useState('');
  const [price, setprice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    const saleData = {
      salesID: salesID,
      pid: productID,
      cid: customerID,
      price: price
    };

    axios.post('http://localhost:3001/sales/add', saleData, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error('Error during login:', error);
    });
    // Clear form fields after submission
    setcustomerID('');
    setprice('');
    setsalesID('');
    setproductID('');

  };

  return (
    <div className=' card w-96 bg-base-100 shadow-xl rounded-2xl bg-slate-300'>
      <h2 className='card-title'>Add New Sale</h2>
      <form onSubmit={handleSubmit}>
        <div><label htmlFor="salesID">Sale ID:</label></div>
        <div>
          <input
            className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="number"
            id="salesID"
            value={salesID}
            onChange={(e) => setsalesID(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="ProductId">Product ID:</label>
          <input
            className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="number"
            id="ProductId"
            value={productID}
            onChange={(e) => setproductID(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="CustomerID">Customer ID:</label>
          <input
            className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="number"
            id="CustomerID"
            value={customerID}
            onChange={(e) => setcustomerID(e.target.value)}
            required
          />
        </div>
        <div><label htmlFor="Price">Price:</label></div>
        <div>

          <input
            className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="number"
            id="Price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
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
