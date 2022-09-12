import React, { useEffect, useState } from 'react'
import "../SkinCare/Skincare.css"
import axios from 'axios'

import Navbar from '../Navbar'
 
import Footer from "../HomePage/Footer"
import { Link } from 'react-router-dom'

export default function SkinCare() {
    const [data,setData] = useState([]);
 
    useEffect(()=>{
      axios.get("http://localhost:8080/skin")
       
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
    <h1>  SKIN CARE <p className='skincareline'></p> </h1>
    <div className="skincarecontainer"> 
    <div className="skincarebtn"> 
     <button > 
     Sunscreen
   </button>
     < button>
     Anti Ageing
    </button>
     < button>
     Dry Skin
    </button>
     < button>
     Glowing Skin
    </button>
     < button>
     Oily Skin
    </button>
      
    <br/>
    <div className="skincarebtn2">

    < button>
    Perfumes
    </button>
   
     < button>
     Skin Care Problems
    </button>
     < button>
     Beauty Secrets
    </button>
     < button>
     Face Care Tips
    </button>
     < button>
     Acne
    </button>
    </div>
     
 </div>
 <div className="skincarediy">
   <div className=" skincarediyimg"> 
   <img height="100%" width="100%"
   src="https://cdn2.stylecraze.com/wp-content/uploads/2018/09/15-Easy-And-Effective-Homemade-Avocado-Face-Masks.jpg.webp" alt=""/>
   </div>
   <div className="skincarediytext">
   <h2> 15 Best Homemade Avocado    
             <br/> Face Mask Recipes & Their  </h2>
         <p1>We have all made DIY face masks. Now, <br/> it\’s time to try out homemade avocado <br/> face masks! Avocado is a natural addition  <br/>to facial masks. Many skin professionals  <br/>recommend using avocado to improve <br/> your skin condition. This superfood   is  <br/>loaded […]</p1> 
    
       <p> BY RAMONA SINHA</p> 
   </div>
   </div>


   <div className='skincaremake-container2'> 
     <div>
       <img width="100%"  
       src= " https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Facial-Steam-For-Acne-Benefits-And-A-Step-By-Step-Guide.jpg.webp" alt="" />
   
    <p>   Facial Steam For Acne:<br/>  Benefits And A Step-By-</p>
    <p> Step Guide
MEDICALLY REVIEWED BY DR.JEFF JUMAILY, M.D., MD</p>
  
     </div>
     <div>
       <img  width="100%"
        src=" https://cdn2.stylecraze.com/wp-content/uploads/2013/05/270-face-packs-for-skin-whitening_556855480.jpg.webp " alt="" />
      
     <p>  11 Best Face Packs For <br/> Skin Lightening  </p>
     <p> MEDICALLY REVIEWED BY DR JOVANA MAJSTOROVIC, MD, MD</p>
    
     </div>
     <div>
       <img  width="100%"
        src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/1561_22-Easy-Homemade-Cucumber-Face-Mask-Recipes-To-Nourish-Skin_368500046.jpg.webp" alt="" />
      
        <p> 22 Easy Homemade<br/> Cucumber Face Mask</p>
        <p> 
BY KUSHNEET KUKREJA</p>
  
     </div>
    
     </div>
{/* 
     /////last */}
  <div className="skincaresubcontainer2"> 
  <div className=" skincarediy">
  <div className="skincarediytext">
   <h2>  10 DIY Coffee Scrub Recipes To  
             <br/> Try At Home For Smoother Skin </h2>
         <p1> A warm cup of coffee in the morning is   <br/> perfect for waking up your senses. However,   <br/> do you know it can also work as a pick-me   <br/>-up for your skin? Well, a DIY coffee scrub   <br/> can be your way to refreshing […]</p1> 
    
       <p> BY RAMONA SINHA
</p> 
   </div>
   <div className=" skincarediyimg"> 
   <img height="100%" width="100%"
   src="https://cdn2.stylecraze.com/wp-content/uploads/2018/09/10-Simple-DIY-Coffee-Scrub-Recipes-For-Smoother-Skin-720x810.jpg.webp" alt=""/>
   </div>
  
   </div>

{/* 
   /////2info///////////// */}



<div className="skincarecollection" >

{
     data.map((ans)=>{
       return(
      
         <>
         <div> 
         {/* <h1>{ans.id}</h1> */}
       
           <img src={ans.img} width="90%" height="500px" />
          
           <p1>{ans.title}</p1>
          <br/>
         <p1>{ans.name}</p1>
          
         </div>
         </>
         
 ) 
     }) 
   }  


                 
          </div>
          </div>
{/* < /////lastdiv///> */}
<Footer/>
 </div>
  
     </div>
  )
}
