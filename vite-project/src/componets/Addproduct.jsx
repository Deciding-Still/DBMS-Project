import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [productID, setProductID] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    const productData = {
      productID: productID,
      productName: productName,
      productPrice: productPrice,
      productStock: quantity
    };

    axios.post('http://localhost:3001/products/add', productData, { 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error('Error during login:', error);
    });
    // Clear form fields after submission
    setProductID('');
    setProductName('');
    setProductPrice('');
    setQuantity('');
  };

  return (
    <div className=' card w-96 bg-base-100 shadow-xl rounded-2xl bg-slate-300'>
      <h2 className='card-title'>Add New Product</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="productName">Product ID:</label>
          <input
          className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="number"
            id="productID"
            value={productID}
            onChange={(e) => setProductID(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="productName">Product Name:</label>
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
          <label htmlFor="productPrice">Enter Product Price:</label>
          <input
          className='rounded-2xl input input-bordered input-primary w-full max-w-xs'
            id="prouctPrice"
            value={productPrice}
            type="number"
            onChange={(e) => setProductPrice(e.target.value)}
            required
          >
          </input>
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
          className="input input-bordered rounded-2xl input-primary w-full max-w-xs"
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="p-1 text-center">
        <button className="pl-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
