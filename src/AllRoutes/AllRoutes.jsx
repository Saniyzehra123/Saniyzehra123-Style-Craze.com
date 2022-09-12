import React from 'react'
 
import { Route, Routes } from "react-router-dom";
import Aboutus from '../Components/Aboutus/Aboutus';
import Haircare from '../Components/Haircare/Haircare';
import Hairstyles from '../Components/Hairstyle/Hairstyles';
import Healthwelth from '../Components/Health/Healthwelth';
 
import Makeupdetails from '../Components/Makeupdetail/Makeupdetails';
import News from '../Components/News/News';
import ProductPage from '../Components/Product/ProductPage';
import SkinCare from '../Components/SkinCare/SkinCare';
import Tools from '../Components/Tools/Tools';
import Home from '../Pages/Home';


export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Makeup" element={<Makeupdetails />} />
            <Route path="/Product" element={<ProductPage />} />
            <Route path="/Haircare" element={<Haircare />} />
            <Route path="/SkinCare" element={<SkinCare />} />
            <Route path="/Hairstyles" element={<Hairstyles />} />
            <Route path="/Wealth" element={<Healthwelth />} />
            <Route path="/news" element={<News />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/aboutus" element={<Aboutus />} />

        </Routes>
    </div>
  )
}
