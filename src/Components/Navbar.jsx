// import React from 'react'
import "../CSS/Navbar.css"
import { Box } from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons'

export default function Navbar() {
  return (
    <div className="nav">
     
      <Box color={"rgb(254,92,116)"} >
      <HamburgerIcon/>
        </Box  >
        <div>
        <img src = "https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png" alt = "logo" />
    </div>
    </div>
  )
  // (
    // <div>
    //      <div>
    //     <img src = "https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png" alt = "logo" />
      
    //     </div>
    //   <div className='menucontainer'>
    //     <div>  <p className='route'>
    //      <p className='name'>  MAKEUP</p>  <p>|</p>
    //      {/* <div> */}
    //       </p>
          
    //     </div>
    //     <div>
    //      <p className='route'>
    //      <p className='name'>  HAIR</p> <p>|</p> 
    //       </p>
    //   </div>
    //   <div>
    //     <p className='route'> 
    //   <p className='name'> SKIN CARE</p>  <p>|</p>
    //     </p>
    //     </div>
    //     <div>
    //     <p className='route'> 
    //   <p className='name'> HAIRSTYLES </p>  <p>|</p>
    //     </p>
    //       </div>
    //       <div>
    //       <p className='route'> 
    //   <p className='name'>
    //       HEALTH & WELLNESS   </p>  <p>|</p>
    //     </p>
    //       </div>
    //       <div>
    //       <p className='route'> 
    //   <p className='name'>  NEWS  </p>  <p>|</p>
    //     </p>
    //       </div>
    //       <div>
    //    <p className='route'> 
    //   <p className='name'> TOOLS </p>  <p>|</p>
    //     </p>
    //       </div>
    //       <div>
    //       <p className='route'> 
    //   <p className='name'> PRODUCTS </p>  <p>|</p>
    //     </p>
    //         </div>
    //         <div>
    //         <p className='route'> 
    //   <p className='name'> ABOUT US  </p>  <p>|</p>
    //     </p>
    //           </div>
    //           </div>
    // </div>
  // )
}



