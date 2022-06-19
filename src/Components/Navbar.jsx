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
  
}



