import React from 'react'
import "../HomePage/Inpress.css"

export default function Inpress() {
  return (
    <div className='inpress-container'> 
    <h1 >IN PRESS <p className='inline'></p></h1>
    <div className='inpress-subcontainer'>
      
      <div className='news'>
        <div>
          <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/06/itv-logo-1-300x41.png.webp" alt="" />
        </div>
        <p>#WearYourColor &<br/> reclaim the beauty</p>
      </div>
      <div className='hind'>
        <div>
          <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/09/Hindu-300x71.png.webp" alt="" />
        </div>
        <p>IncNut Digital raises <br/>$4 million in Series-A</p>
      </div>
      <div className='world'>
        <div>
          <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/06/BW-logo-300x38.png.webp" alt="" />
        </div>
        <p>HerHQ Media, India’s<br/> First Ad Revenue</p>
      </div>
    </div>
    </div>
  )
}
