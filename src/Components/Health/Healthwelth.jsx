import React, { useEffect, useState } from 'react'
import "../Health/Healthwelth.css"
 
import axios from 'axios'

import Navbar from '../Navbar'
 
import Footer from "../HomePage/Footer"

export default function Healthwelth() {
  const [data,setData] = useState([]);
  useEffect(()=>{
      axios({
          url: "http://localhost:8080/health",
          
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
    <h1> HEALTH AND WELLNESS <p className='hsline'></p> </h1>
    <div className="hscontainer"> 
    <div className="hsbtn"> 
     <button > 
     Ayurveda
   </button>
     < button>
     Weight Gain
    </button>
     < button>
     Nutrition
    </button>
     < button>
     Healthy Food
    </button>
     < button>
     Diet Tips
    </button>
      
    <br/>
    <div className="hwbtn2">

    < button>
    Yoga
    </button>
   
     < button>
     Weight Loss
    </button>
     < button>
     Home Remedies
    </button>
     < button>
     Ingredients
    </button>
     {/* < button>
     Medium Hairstyles
    </button> */}
    </div>
     
 </div>
 <div className="hsdiy">
   <div className="hsdiyimg"> 
   <img height="100%" width="100%"
   src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/7-Monolaurin-Benefits-You-Need-To-Know-About.jpg.webp" alt=""/>
   </div>
   <div className="hsdiytext">
   <h2>  7 Monolaurin Benefits You Need To Know About    
             <br/> You Need To Know About     </h2>
         <p1> Initially available as a nutritional formulation<br/> in the 1960s, monolaurin is globally <br/>available as a dietary supplement today. <br/>Research suggests that monolaurin may <br/>exhibit potential antimicrobial properties that<br/> may be essential in fighting certain diseases<br/> (1). Monolaurin is used commonly […]   </p1> 
    
       <p>  BY VARSHA PATNAIK
</p> 
   </div>
   </div>


   <div className='hsmake-container2'> 
     <div>
       <img width="100%"  
       src= "https://cdn2.stylecraze.com/wp-content/uploads/2014/03/333_20-Best-Home-Remedies-To-Get-Flawless-Skin_347446904.jpg_1.jpg.webp" alt="" />
   
    <p> Flawless Skin: Is It Possible To<br/> Get One Using These 20 Home   </p>
    <p>  BY SHAHEEN NASER</p>
  
     </div>
     <div>
       <img  width="100%"
        src="https://cdn2.stylecraze.com/wp-content/uploads/2015/05/2186-Amazing-Health-Benefits-Of-Endoflex-Essential-Oil-ss.jpg.webp" alt="" />
      
     <p> 10 Amazing Health Benefits Of<br/>Endoflex Essential Oil  </p>
     <p>  BY TANYA CHOUDHARY</p>
    
     </div>
     <div>
       <img  width="100%"
        src="https://cdn2.stylecraze.com/wp-content/uploads/2015/05/14-Home-Remedies-To-Treat-Keratosis-Pilaris-1.jpg.webp" alt="" />
      
        <p>   14 Effective Home Remedies For <br/>   Treating Keratosis Pilaris   </p>
        <p>  BY KUSHNEET KUKREJA</p>
  
     </div>
    
     </div>
{/* 
     /////last */}
  <div className="hssubcontainer2"> 
  <div className="hsdiy">
  <div className="hsdiytext">
   <h2>  10 Amazing Health Benefits Of Blue  
             <br/>   Cheese </h2>
         <p1>Blue cheese is one of the types of cheese known for its  <br/> pungent smell and tangy flavor. Originally from France, <br/>  blue cheese is made from the Penicillium Roqueforti  <br/> bacterium, which gives it the characteristic blue spots <br/>  and veins. Rich in […]</p1> 
    
       <p> BY JYOTSANA RAO

</p> 
   </div>
   <div className="hsdiyimg"> 
   <img height="100%" width="100%"
   src="https://cdn2.stylecraze.com/wp-content/uploads/2015/03/blue-cheese-shutterstock_82385860-720x335.jpg.webp" alt=""/>
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
