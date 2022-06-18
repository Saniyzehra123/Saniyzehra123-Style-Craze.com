import React from 'react'
 
 

import { Route, Routes } from "react-router-dom";
 
import Makeupdetails from '../Components/Makeupdetail/Makeupdetails';
import ProductPage from '../Components/Product/ProductPage';
import Home from '../Pages/Home';


export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Makeup" element={<Makeupdetails />} />
            <Route path="/Product" element={<ProductPage />} />

        </Routes>
    </div>
  )
}
