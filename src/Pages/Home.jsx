import React from 'react'
import Haircare from '../Components/HomePage/Haircare'
import HairStyles from '../Components/HomePage/HairStyles'
import Healthwealth from '../Components/HomePage/Healthwealth'
 
import Homepage from '../Components/HomePage/Homepage'
import Inpress from '../Components/HomePage/Inpress'
import Makeup from '../Components/HomePage/Makeup'
import Medicalreviewers from '../Components/HomePage/Medicalreviewers'
 
import { NavImg } from '../Components/HomePage/NavImg'
import Skincare from '../Components/HomePage/Skincare'
import Testimonials from '../Components/HomePage/Testimonials'
 

export default function Home() {
  return (
    <div>
        <Homepage/>
        <NavImg/>
        <Makeup/>
        <Haircare/>
        <HairStyles/>
        <Skincare/>
    <Healthwealth/>
   <Inpress/>
   <Medicalreviewers/>
   <Testimonials/>
      
    </div>
  )
}
