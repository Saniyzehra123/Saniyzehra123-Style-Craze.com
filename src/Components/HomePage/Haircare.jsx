import React from 'react'
import "../HomePage/Haircare.css"

export default function Haircare() {
  return (
    <div className='carecontainer'> 
      <h1 className='headstyle'> <a href="/Haircare"> HAIR CARE </a>  <p className='linecare'></p> </h1>
    <div className='container'>
  
      <div className='leftcare'>
      <a href="/Haircare">
        <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/20-Secret-Tips-To-Get-Shiny-Voluminous-And-Healthy-Hairs.jpg.webp" alt="" />
        </a>  
      </div>
      <div className='rightcare'>
      <h2>   20 Secret Tips To Get Shiny,
                <br/>Voluminous, And Healthy Hair</h2>
            <p> Almost every woman fantasizes about having thick, <br/> long hair. However, pollution and the use of styling  <br/>products and colorants on a regular basis harm the <br/> hair, making it thin, dry, and fragile (1). That is why we <br/> are here to […] </p> 
       
          <p> Anjali Sayee ● 46.9 shares</p>   
      </div>

     
    </div>
    <div className='sub-care'>
        <div className='dyeimg'>
          <img width="100%" height="150px"
          src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/11-Simple-Steps-To-Dye-Your-Hair-At-Home-Like-A-Pro.jpg.webp" alt="" />
        </div>
        <div className='dyetext'>
          <p>11 Simple Steps To Dye <br/>Your Hair At Home Like A <br/> Pro</p>
        </div>

        <div className='shinyimg'>
          <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/How-To-Get-Mirror-Shiny-Hair-Easily.jpg.webp" alt="" />
        </div>
        <div className='shinytext'>
        
            <p>How To Get Mirror Shiny 
              <br/>
              Hair Easily
               
              </p>
              <p>Medically Reviewed by Dr. Shruti Chavan, MBBS, MBBS</p>
            
         
        </div>

        
      </div>
      <div className='readcare'>
            <p>Read More</p>
           </div>
    </div>
  )
}
