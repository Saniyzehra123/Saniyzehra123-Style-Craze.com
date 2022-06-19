import React from 'react'
 import  "../HomePage/Makeup.css"
 import { Link } from "react-router-dom";
 
// import "../HomePage/Makeupdata.css"
 

export default function Makeup() {
  return (
    <div  >
         <h2 className="head"> <Link href="/Makeup">Makeup</Link>  <p className='makeline'></p>  </h2>   
         
        <div className='container-makeup'>
            <div className='left'>
            <Link to="/Makeup">   <img   width="100%" height="450px"
              src="https://cdn2.stylecraze.com/wp-content/uploads/2012/05/50-Makeup-Tips-You-Have-To-Know-6.jpg.webp" alt="" />
           </Link>
            </div>
            <div className='right'>
              <h2>  50 Makeup Tips You Have To 
                <br/>Know</h2>
            <p> Whether you are a beginner or an expert, <br/>makeup tips and tricks always come in handy <br/> for a smooth experience and tackling <br/>accidents. For example, a simple trick can<br/> help you get the perfect wing design or cat<br/>eyes using […]</p> 
       
          <p>  Shalini Roy ● 5.4 shares</p>   
            </div>
        
        </div>
        <div className='container2'> 
        <div>
          <img width="100%"  
          src= "https://cdn2.stylecraze.com/wp-content/uploads/2012/05/25-Best-Eye-Makeup-Tutorials.jpg.webp" alt="" />
        <p> 
       <p>25 Best Eye Makeup Tutorials</p>
       <p>Esha Saxena ● 114.1 shares</p>
       </p>
        </div>
        <div>
          <img  width="100%"
           src=" https://cdn2.stylecraze.com/wp-content/uploads/2012/05/10-Best-And-Easy-Nail-Art-Designs-To-Try-At-Home-In-2022.jpg.webp" alt="" />
        <p>
        <p>10 Best And Easy Nail Art Designs To Try At Home In 2022</p>
        <p>Esha Saxena ● 114.1 shares</p>
        </p>
        </div>
        <div>
          <img  width="100%"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2012/05/Black-Girl-Makeup-Ideas-For-Different-Occasions.jpg.webp" alt="" />
           <p> 
           <p> Black Girl Makeup Ideas For Different Occasions</p>
           <p>Sushmita Barman</p>
           </p>

           
        </div>
       
        </div>
        <p className='read'>
            <p>Read More</p>
           </p>
    </div>
  )
}
