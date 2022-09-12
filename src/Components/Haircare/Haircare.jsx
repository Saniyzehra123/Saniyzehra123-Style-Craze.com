import React, { useState,useEffect } from 'react'
import "../Haircare/Haircare.css"
 
 
import axios from 'axios'

import Navbar from '../Navbar'
 
import Footer from "../HomePage/Footer"
import { Link } from 'react-router-dom'

export default function Haircare() {

    const [data,setData] = useState([]);
 
    useEffect(()=>{
          
      axios.get(
           "http://localhost:8080/hairs" )
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
    <h1> HAIR CARE <p className='haircareline'></p> </h1>
    <div className="haircarecontainer"> 
    <div className="haircarebtn"> 
     <button > 
     Dry Hair Care
   </button>
     < button>
     Hair Care Solutions
    </button>
     < button>
     Dandruff
    </button>
     < button>
     Hair Treatment
    </button>
     < button>
     Basic Hair Care
    </button>
      
    <br/>
    <div className="haircarebtn2">

    < button>
     Hair Fall
    </button>
   
     < button>
     Hair Growth
    </button>
     < button>
     Hair Colour
    </button>
     < button>
     Hair Care Ideas
    </button>
    </div>
     
 </div>
 <div className="haircarediy">
   <div className="haircarediyimg"> 
   <img height="100%" width="100%"
   src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/8-Simple-And-Effective-Tips-To-Take-Care-Of-Your-Permed-Hair-1-720x810.jpg.webp" alt=""/>
   </div>
   <div className="haircarediytext">
   <h2>   8 Simple And Effective Tips To Take Care Of  
             <br/> Tips To Take Care Of  </h2>
         <p1> Hair perming has been a popular  <br/>hairstyling method since 1872. <br/> Tongs were utilized to alter the <br/> hair structure before. Over time, <br/> perming methods have improved,  <br/>and so have the tips to take care <br/> of your permed hair. This is <br/> because […]</p1> 
    
       <p>  REVIEWED BY DR. K. HARISH KUMAR, MD DVL, MD DVL</p> 
   </div>
   </div>


   <div className='haircaremake-container2'> 
     <div>
       <img width="100%"  
       src= "https://cdn2.stylecraze.com/wp-content/uploads/2016/09/How-To-Fix-Orange-Hair-After-Bleaching--6-Quick-Tips-.jpg.webp" alt="" />
   
    <p>  How To Fix Orange Hair<br/> After Bleaching – 6 Quick</p>
    <p> BY ARSHIYA SYEDA</p>
  
     </div>
     <div>
       <img  width="100%"
        src=" https://cdn2.stylecraze.com/wp-content/uploads/2021/02/11-Ways-To-Care-For-Your-Natural-Hair-In-Winter.jpg.webp" alt="" />
      
     <p>  How To Protect Natural<br/>  Hair In Winter</p>
     <p>BY RAMONA SINHA</p>
    
     </div>
     <div>
       <img  width="100%"
        src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/Does-Ginger-Aid-Hair-Growth-Benefits-Uses-And-More-Banner.jpg.webp" alt="" />
      
        <p>Does Ginger Aid Hair <br/> Growth? Benefits, Uses,</p>
        <p>BY ARSHIYA SYEDA</p>
  
     </div>
    
     </div>
{/* 
     /////last */}
  <div className="haircaresubcontainer2"> 
  <div className="haircarediy">
  <div className="haircarediytext">
   <h2>    How To Air-Dry Hair – A Quick 
             <br/> Guide For All Types </h2>
         <p1>Drying hair seems like a deceivingly simple<br/> task. You just need to let your hair down, <br/>right? Not so much. If you leave your hair <br/>sopping wet, by the time your hair air-dries, it <br/>will be a jungle of frizz […]</p1> 
    
       <p> MEDICALLY REVIEWED BY DR. SHRUTI CHAVAN, MBBS, MBBS</p> 
   </div>
   <div className="haircarediyimg"> 
   <img height="100%" width="100%"
   src="https://cdn2.stylecraze.com/wp-content/uploads/2018/03/How-To-Air-Dry-Hair-A-Comprehensive-Guide.jpg.webp" alt=""/>
   </div>
  
   </div>

{/* 
   /////2info///////////// */}



<div className="haircarecollection" >

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
