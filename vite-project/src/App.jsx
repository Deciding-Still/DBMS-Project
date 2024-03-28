import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './componets/Sidebar'
import Layout from './componets/Layout'
import { Routes, Route } from 'react-router-dom'
import Product from './componets/Products'
import Customer from './componets/Customer'
import AddProductForm from './componets/Addproduct'
import Employee from './componets/Employee'
import Branch from './componets/Branch'
import Login from './componets/Login'
import Sales from './componets/Sales'
import ELayout from './employcomponets/Elayout'
import EHeader from './employcomponets/Eheader'
import ESidebar from './employcomponets/Esidebar'
import GlassForm from './componets/GlassForm'
import MainPage from './componets/MainPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* // THIS IS THE LOGIN PAGE */}
      <MainPage />

    {/* THIS IS FOR ADMIN */}
      {/* {<Layout > {} */}
        {/* <Routes> */}
          {/* <Route path='/Products' element={<Product />} /> */}
          {/* <Route path='/Customer' element={<Customer />}></Route> */}
          {/* <Route path='/Employee' element={<Employee />} /> */}
          {/* <Route path='/Branch' element={<Branch />} /> */}
          {/* <Route path='/Sales' element={<Sales />} /> */}
        {/* </Routes> */}
      {/* </Layout>} */}
 
     
   
       {/* <ELayout> // THIS IS FOR EMPLOYEE */}
      {/* <Routes> */}
{/*  */}
          {/* <Route path='/Products' element={<Product />} /> */}
    {/*  */}
          {/* <Route path='/Customer' element={<Customer />}></Route> */}
     {/*  */}
          {/* <Route path='/Sales' element={<Sales />} /> */}
        {/* </Routes> */}
        {/*  */}
      {/* </ELayout> */}
    </>
  )
}

function Example() {
  return (
    <div>wtf</div>
  )
}

export default App
