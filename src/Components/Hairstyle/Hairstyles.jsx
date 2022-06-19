 import React from 'react'
 import "../Hairstyle/Hairstyles.css"

   
 
import axios from 'axios'

import Navbar from '../Navbar'
 
import Footer from "../HomePage/Footer"
import { useState,useEffect } from 'react'
 
 export default function HairStyles() {
  const [data,setData] = useState([]);
  useEffect(()=>{
      axios({
          url: "http://localhost:8080/Hairstyles",
          
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
     <a href="/"> <Navbar/> </a>
    <h1>   HAIR STYLES <p className='hsline'></p> </h1>
    <div className="hscontainer"> 
    <div className="hsbtn"> 
     <button > 
     Bun Hairstyles
   </button>
     < button>
     Updo Hairstyles
    </button>
     < button>
     Teen Hairstyles
    </button>
     < button>
     Wavy Hairstyles
    </button>
     < button>
     Braid Hairstyles
    </button>
      
    <br/>
    <div className="hsbtn2">

    < button>
    Hairstyle Trends
    </button>
   
     < button>
     Curly Hairstyles
    </button>
     < button>
     Bob Hairstyles
    </button>
     < button>
     Bridal Hairstyles
    </button>
     < button>
     Medium Hairstyles
    </button>
    </div>
     
 </div>
 <div className="hsdiy">
   <div className="hsdiyimg"> 
   <img height="100%" width="100%"
   src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/How-To-Figure-Out-If-Short-Hair-Will-Suit-You-720x810.jpg.webp" alt=""/>
   </div>
   <div className="hsdiytext">
   <h2>  How To Figure Out If Short    
             <br/>  Hair Will Suit You  </h2>
         <p1> Short hair is a big craze right now! But if <br/>you find yourself wondering ‘Does short<br/> hair suit me?’, well, let us tell you that it is<br/> so stunning and versatile. Do not worry – <br/>as you can mess it […]    </p1> 
    
       <p>  BY ANJALI SAYEE </p> 
   </div>
   </div>


   <div className='hsmake-container2'> 
     <div>
       <img width="100%"  
       src= " https://cdn2.stylecraze.com/wp-content/uploads/2017/11/A-Comprehensive-Guide-To-The-Different-Types-Of-Braids.jpg.webp" alt="" />
   
    <p>A Comprehensive Guide To<br/> The Different Types Of</p>
    <p>  BY ANJALI SAYEE</p>
  
     </div>
     <div>
       <img  width="100%"
        src="https://cdn2.stylecraze.com/wp-content/uploads/2018/10/How-To-Choose-The-Right-Hair-Color-For-Your-Brown-Eyes.jpg.webp" alt="" />
      
     <p> How To Choose The Right <br/> Hair Color For Your Brown </p>
     <p>  BY ANJALI SAYEE</p>
    
     </div>
     <div>
       <img  width="100%"
        src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/50-Popular-Hollywood-And-Bollywood-Hairstyles-2.jpg.webp" alt="" />
      
        <p>  50 Popular Hollywood & <br/>   Bollywood Celebrity</p>
        <p>   BY JYOTSANA RAO</p>
  
     </div>
    
     </div>
{/* 
     /////last */}
  <div className="hssubcontainer2"> 
  <div className="hsdiy">
  <div className="hsdiytext">
   <h2> 4 Amazing Hairstyles For Kids
             <br/>  With Short Hair </h2>
         <p1> If you love your little nieces, <br/>  sisters or your kid enough to go <br/> to any length for them, you will <br/> love experimenting with these <br/> hairstyles for kids with short hair. <br/> There are so many cute braids,<br/>  accessories, waves, and styles <br/> […]</p1> 
    
       <p> BY JYOTSANA RAO

</p> 
   </div>
   <div className="hsdiyimg"> 
   <img height="100%" width="100%"
   src="https://cdn2.stylecraze.com/wp-content/uploads/2013/05/4-Simple-Hairstyles-For-Kids-With-Short-Hair-2-720x810.jpg.webp" alt=""/>
   </div>
  
   </div>

{/* 
   /////2info///////////// */}



<div className="hscollection" >

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
 