import React from 'react'

import loginImg from '../assets/login.jpg'
import AddCustomer from './Addcustomer'





export default function Login() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>

            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>LOGIN</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Username</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center'>
                            <button className='mr-20'> Forgot Password</button>
                            <button  >createaccount
                                </button></p>
                    </div>
                    <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNIN</button>

                </form>
            </div>
        </div>
    )
    }
// import React, { useState } from 'react';
// import loginImg from '../assets/login.jpg';

// function CreateAccountForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [phone, setPhone] = useState('');

//     const handleCreateAccount = () => {
//         if (password !== confirmPassword) {
//             alert("Passwords do not match.");
//             return;
//         }
//         alert(`Username: ${username}\nPassword: ${password}\nPhone Number: ${phone}`);
//     };

//     return (
//         <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
//             <h2 className='text-4xl dark:text-white font-bold text-center'>CREATE ACCOUNT</h2>
//             <div className='flex flex-col text-gray-400 py-2'>
//                 <label>Username</label>
//                 <input
//                     className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//             </div>
//             <div className='flex flex-col text-gray-400 py-2'>
//                 <label>Password</label>
//                 <input
//                     className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             <div className='flex flex-col text-gray-400 py-2'>
//                 <label>Confirm Password</label>
//                 <input
//                     className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
//                     type="password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//             </div>
//             <div className='flex flex-col text-gray-400 py-2'>
//                 <label>Phone Number</label>
//                 <input
//                     className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
//                     type="text"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                 />
//             </div>
//             <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' onClick={handleCreateAccount}>CREATE ACCOUNT</button>
//         </form>
//     );
// }

// export default function Login() {
//     return (
//         <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
//             <div className='hidden sm:block'>
//                 <img className='w-full h-full object-cover' src={loginImg} alt="" />
//             </div>

//             <div className='bg-gray-800 flex flex-col justify-center'>
//                 <CreateAccountForm />
//             </div>
//         </div>
//     )
// }
