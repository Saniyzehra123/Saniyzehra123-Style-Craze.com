import React from 'react'
import "../HomePage/Medicalreviewers.css"

export default function Medicalreviewers() {
  return (
    <div className='medical'>
    <div className='medicalreviewers-container'>
    <h1 >MEDICAL REVIEWERS <p className='inline'></p></h1>
    <div className='medicalreviewers-subcontainer'>
   <div>
    <div className='medicalleft'> 
    <img width= "105%" height="124px"
    src="https://www.stylecraze.com/static-content/aboutus/Vindhya.jpg" alt="" />
  </div>
   <div className='medicalright'>
    
   <p>Dr. Vindhya L Veerula</p>
   <p>MD, FAAD</p>
 
   </div>
 
   </div>
 
    <div>
    <div className='medicalleft'> 
    <img width= "105%" height="124px"
    src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Dr-Perpetua-Neo-DClinPsy-UCL-MPhil-1.jpg.webp" alt="" />
  </div>
   <div className='medicalright-2'>
    
   <p>Dr. Prepetua Neo</p>
   <p>DClinPsy,UCL ,MPhil</p>
 
   </div>
    </div>
    <div >
    <div className='medicalleft'> 
    <img width= "105%" height="124px"
    src="https://cdn2.stylecraze.com/wp-content/uploads/2019/01/Dr-Jill-Carnahan.jpg.webp" alt="" />
  </div>
   <div  className='medicalright-3'>
    
   <p>Dr.Jill Carnahan</p>
   <p>MD, ABFM.ABIHM,IFMCP</p>
 
   </div>
    </div>
    </div>


    {/* ///////container2//////////// */}
   <div className='medicalreviewers-subcontainer2'> 
    <div>
    <div className='medicalleft'> 
    <img width= "105%" height="124px"
    src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Alexandra-Dusenberry-MS-RDN.jpg.webp" alt="" />
  </div>
   <div  className='medicalright-4'>
    
   <p>Alexandra Dusenberry</p>
   <p>MS, RDN</p>
 
   </div> 
    </div>
   <div>
   <div className='medicalleft'> 
    <img width= "105%" height="124px"
    src="https://cdn2.stylecraze.com/wp-content/uploads/2019/01/Mollie-Meldahl.jpg.webp" alt="" />
  </div>
   <div className='medicalright-5'>
    
   <p> Mollie Meldahi</p>
   <p>RD, LD , CPT</p>
 
   </div>
   </div>
    <div>
    <div className='medicalleft'> 
    <img width= "105%" height="124px"
    src="https://cdn2.stylecraze.com/wp-content/uploads/2019/03/Dr.-Kendall-R.-Roehl.jpg.webp" alt="" />
  </div>
   <div className='medicalright-6'>
    
   <p>Dr.Kendall R. Roehl</p>
   <p>MD, FACS</p>
 
   </div>
    </div>
   
    </div>  
    </div>
    <div className='mtext'> 
    <p  >Our team of 80+ doctors, nutritionists, dermatologists, and wellness professionals reviews all our articles for medical and factual accuracy.</p>
  
    </div>
    <div className='mbtn'> 
    <button  >MEET THE TEAM</button>
    </div>
    </div>
  )
}
