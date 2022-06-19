 import React, { useState } from 'react'
 
  import "../Product/ProductPage.css"
 
import axios from 'axios'

import Navbar from '../Navbar'
 
import Footer from "../HomePage/Footer"
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

 
 export default function ProductPage() {
  const [data,setData] = useState([]);
  useEffect(()=>{
      axios({
          url: "http://localhost:8080/Products",
          
      })
      .then((res)=>{
        console.log("makeup",res)
          setData(res.data)
      })
      .catch((err)=>{
          alert("error")
      })
  },[])
   return (
     <div>
     <Link to="/"> <Navbar/> </Link>
    <h1> SHOP <p className='hsline'></p> </h1>
    <div className="procontainer"> 
    <div className='select'>
     <select>
      <option value="">
         Category
      </option>
      <option value="">
        Women Fitness
      </option>
      <option value="">
        Skin
      </option>
      <option value="">
        Makeup
      </option>
      <option value="">
         Health
      </option>
      <option value="">
        Hair
      </option>
      <option value="">
        sport
      </option>
     </select>
     </div>
    <div className="procollection" >
{
     data.map((ans)=>{
       return(
      
         <>
         <div> 
         
       
           <img src={ans.img} width="90%" height="500px" />
          <br/>
          <p1>{ans.name}</p1>
          <br/>
           <p1>{ans.title}</p1>
          <br/>
            <p1>{ans.des}</p1>
          
          
         </div>
         </>
         
 ) 
     }) 
   }  
          
          </div>
          </div>

      
     </div>
   )
 }
 