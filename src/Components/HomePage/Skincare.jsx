import React from 'react'
import  "../HomePage/Skincare.css"
 
export default function Skincare() {
  return (
    <div  className='skincontainer'>
       <h1>SKIN CARE   <p className='skline'></p> </h1>
    <div className='skincare-container'>
  
      <div className='left-skcare'>
        <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/08/How-To-Get-Paint-Off-Skin--Useful-Tips-And-Methods.jpg.webp" alt="" />
      </div>
      <div className='right-skcare'>
      <h2> How To Get Paint Off Skin – Useful <br/> Tips And Methods
           </h2>
            <p> One of the most common challenges with painting,<br/>whether for home renovation or creative projects, is <br/>that it is difficult to remove paint from your hands. Do <br/> you want to know how to get paint off your skin? There are […]</p> 
       
          <p>Medically Reviewed by Dr. CP Thajudheen, MD, MD</p>   
      </div>

     
    </div>
    <div className='sub-skcare'>
        <div className='dyeimg-skcare'>
          <img width="100%" height="150px"
          src="https://cdn2.stylecraze.com/wp-content/uploads/2021/08/Does-Sunscreen-Prevent-Tanning-How-To-Protect-Your-Skin.jpg.webp" alt="" />
        </div>
        <div className='dyetext-skcare'>
          <p> Does Sunscreen Prevent  <br/>Tanning? How To Protect <br/> Your Skin? </p>
        </div>

        <div className='shinyimg-skcare'>
          <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/08/How-To-Take-Care-Of-Your-Skin-In-Summer-15-Tips-For-All-Skin-Types.jpg.webp" alt="" />
        </div>
        <div className='shinytext-skcare'>
        
            <p> How To Take Care Of Your <br/> Skin In Summer : 15 Tips  <br/> For All Skin Types 
          
              </p>
              <p>Medically Reviewed by Dr Medically Reviewed by Dr. Vindhya L<br/> Veerula, MD, FAAD, MD, FAAD</p>
        </div>

        
      </div>
      <div className='readcare-skcare'>
            <p>Read More</p>
           </div>
    </div>
  )
}
