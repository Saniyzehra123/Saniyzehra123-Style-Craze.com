 
import React, { useEffect, useState } from 'react'
 import "../News/News.css"
 
import axios from 'axios'

import Navbar from '../Navbar'
 
import Footer from "../HomePage/Footer"
import { Link } from 'react-router-dom'

 
  

export default function News() {
    const [data,setData] = useState([]);
    useEffect(()=>{

      axios.get("http://localhost:8080/news")
        
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
    <h1> NEWS <p className='hsline'></p> </h1>
    <div className="newcontainer"> 
    <div className="newbtn"> 
     <button > 
     Brand News
   </button>
     < button>
     Inspiration
    </button>
     < button>
     Celebrity News
    </button>
     < button>
     Trends
    </button>
     < button>
     Rangoli
    </button>
      
    <br/>
    <div className="newbtn2">

    < button>
    Tattoos
    </button>
   
     < button>
     Top 10'S
    </button>
     < button>
     Fashion
    </button>
     < button>
     Flowers
    </button>
     {/* < button>
     Medium Hairstyles
    </button> */}
    </div>
     
 </div>
 <div className=" newdiy">
   <div className=" newdiyimg"> 
   <img height="100%" width="100%"
   src=" https://cdn2.stylecraze.com/wp-content/uploads/2014/08/miss-world-720x810.jpg.webp" alt=""/>
   </div>
   <div className=" newdiytext">
   <h2>  Beautiful Miss World Winners  
             <br/>  From 1951-2021     </h2>
         <p1>  What does a woman really, really want? To  <br/>  be treated like the queen she is! There are a  <br/>  few beautiful women out there who followed  <br/>  their hearts and made sure they got their  <br/>  crowns from the society. And here, I […]  </p1> 
    
       <p>  BY VARSHA PATNAIK
</p> 
   </div>
   </div>


   <div className='newmake-container2'> 
     <div>
       <img width="100%"  
       src= " https://cdn2.stylecraze.com/wp-content/uploads/2013/12/35-Most-Beautiful-Black-Female-Celebrities-1.jpg.webp" alt="" />
   
    <p>  35 Most Beautiful Black Female<br/> Celebrities  </p>
    <p>  BY ESHA SAXENA</p>
  
     </div>
     <div>
       <img  width="100%"
        src=" https://cdn2.stylecraze.com/wp-content/uploads/2015/06/815_8-Best-Ways-To-Increase-Oxygen-Level-In-Blood_shutterstock_133834292.jpg.webp" alt="" />
      
     <p>  8 Best Ways To Increase Oxygeno<br/> Levels In Blood </p>
     <p>  BY JYOTSANA RAO</p>
    
     </div>
     <div>
       <img  width="100%"
        src=" https://cdn2.stylecraze.com/wp-content/uploads/2015/08/I-Slept-With-An-Onion-In-My-Sock-And-This-Is-What-Happened-1.jpg.webp" alt="" />
      
        <p>  I Slept With An Onion In My Sock<br/>    And This Is What Happened   </p>
        <p>  BY JYOTSANA RAO</p>
  
     </div>
    
     </div>
{/* 
     /////last */}
  <div className="newsubcontainer2"> 
  <div className="newdiy">
  <div className="hsdiytext">
   <h2>  11 Effective Tips To Increase Height In 1   
             <br/>    Month</h2>
         <p1> More and more teenagers are desperate to grow taller<br/>  and gain those extra inches before it is too late. If you are<br/>  among them, you can achieve this with some tips to <br/> increase your height in a month. But is […]</p1> 
    
       <p>  BY KUSHNEET KUKREJA
</p> 
   </div>
   <div className="newdiyimg"> 
   <img height="100%" width="100%"
   src=" https://cdn2.stylecraze.com/wp-content/uploads/2014/01/753_10-Effective-Tips-To-Increase-Height-In-1-Month_133030724.jpg_1-720x810.jpg.webp" alt=""/>
   </div>
  
   </div>

{/* 
   /////2info///////////// */}



<div className="newcollection" >

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
