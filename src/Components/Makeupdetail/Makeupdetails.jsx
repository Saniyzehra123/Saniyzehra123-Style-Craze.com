 import "../Makeupdetail/Makeupdetails.css"
//  import { Button,Stack,Box } from '@chakra-ui/react';
 import React, { useState ,useEffect} from 'react'
 import { Grid, GridItem } from '@chakra-ui/react'
 import axios from 'axios'

import Navbar from '../Navbar'
import { useDispatch } from "react-redux";
import Footer from "../HomePage/Footer"
 
 export default function Makeupdetails() {

  const [data,setData] = useState([]);
 
  useEffect(()=>{
        
    axios({
        url: "http://localhost:8080/makeup",
      
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
       <h1>MAKE UP  <p className='makeupline'></p> </h1>
       <div className="mdcontainer"> 
       <div className="makebtn"> 
        <button > 
        Mehandi Designs
      </button>
        < button>
        Bridal Makeup
       </button>
        < button>
        Celebrity Makeup
       </button>
        < button>
        Nail Art
       </button>
        < button>
        Makeup Ideas
       </button>
        < button>
        Face Makeup
       </button>
       <br/>
       <div className="makebtn2">

        < button>

        Lip Make Up
       </button>
        < button>
        Eye Make Up
       </button>
       </div>
        
    </div>
    <div className="diy">
      <div className="diyimg"> 
      <img height="100%" width="100%"
      src="https://cdn2.stylecraze.com/wp-content/uploads/2012/04/Top-18-DIY-Homemade-Lip-Scrub-Recipes-720x810.jpg.webp" alt=""/>
      </div>
      <div className="diytext">
      <h2>   Top 18 DIY Homemade Lip  
                <br/>Scrub Recipes</h2>
            <p1>Lip balms are everybody’s go-to product to<br/> keep the pair hydrated, but exfoliation with<br/> DIY lip scrub is equally important to make<br/> sure they are clear of dead skin cells and <br/>become soft in the process. Yes, we<br/> mentioned DIY […]</p1> 
       
          {/* <p>  Shalini Roy ● 5.4 shares</p>  */}
      </div>
      </div>


      <div className='make-container2'> 
        <div>
          <img width="100%"  
          src= "https://cdn2.stylecraze.com/wp-content/uploads/2012/06/How-To-Make-Your-Own-Lip-Balms-At-Home-Top-15-DIYs.jpg.webp" alt="" />
      
       <p> How To Make Your <br/>Own Lip Balms At</p>
       <p>BY ESHA SAXENA</p>
     
        </div>
        <div>
          <img  width="100%"
           src=" https://cdn2.stylecraze.com/wp-content/uploads/2013/05/Top-51-Most-Beautiful-Women-in-the-World.jpg.webp" alt="" />
         
        <p> 52 Most Beautiful <br/>Women In The</p>
        <p> BY ESHA SAXENA</p>
       
        </div>
        <div>
          <img  width="100%"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2012/09/3206-10-Simple-Tips-To-Take-Off-Holi-Colours-Safely-SS.jpg" alt="" />
         
           <p> 10 Simple Tips To <br/>Take Off Holi</p>
           <p> BY NISHA BAGHADIA</p>
     
        </div>
       
        </div>
{/* 
        /////last */}
     <div className="subcontainer2"> 
     <div className="diy">
     <div className="diytext">
      <h2>   Top 18 DIY Homemade Lip  
                <br/>Scrub Recipes</h2>
            <p1>Lip balms are everybody’s go-to product to<br/> keep the pair hydrated, but exfoliation with<br/> DIY lip scrub is equally important to make<br/> sure they are clear of dead skin cells and <br/>become soft in the process. Yes, we<br/> mentioned DIY […]</p1> 
       
          {/* <p>  Shalini Roy ● 5.4 shares</p>  */}
      </div>
      <div className="diyimg"> 
      <img height="100%" width="100%"
      src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/184-15-bollywood-stars-without-makeup-720x810.jpg.webp" alt=""/>
      </div>
     
      </div>

{/* 
      /////2info///////////// */}
  
 

<div className="collection" >

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
 