import React, { useEffect, useState } from 'react'
import "../HomePage/HomePage.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {

    axios({
      url: "http://localhost:8080/makeup",

    })
      .then((res) => {
        console.log("makeup", res)
        setData(res.data)
      })
      .catch((err) => {
        alert("error")
      })
  }, [])

  const [hair, setHairCare] = useState([]);

  useEffect(() => {

    axios({
      url: "http://localhost:8080/hairs",

    })
      .then((res) => {
        console.log("hcare", res)
        setHairCare(res.data)
      })
      .catch((err) => {
        alert("error")
      })
  }, [])

  const [skin, setSkin] = useState([]);

  useEffect(() => {

    axios({
      url: "http://localhost:8080/skin",

    })
      .then((res) => {
        console.log("skin", res)
        setSkin(res.data)
      })
      .catch((err) => {
        alert("error")
      })
  }, [])

  const [style, setStyle] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8080/Hairstyles",

    })
      .then((res) => {
        console.log("style", res)
        setStyle(res.data)
      })
      .catch((err) => {
        alert("error")
      })
  }, [])

  const [health, setHealth] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8080/health",

    })
      .then((res) => {
        console.log("health", res)
        setHealth(res.data)
      })
      .catch((err) => {
        alert("error")
      })
  }, [])

  const [news, setNews] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8080/news",

    })
      .then((res) => {
        console.log("news", res)
        setNews(res.data)
      })
      .catch((err) => {
        alert("error")
      })
  }, [])
  return (
 
      <div className='mainnav'>
        <div>
          <img src="https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png" alt="logo" />

        </div>
        <div className='menucon'>
          <div className='menu'>
            <ul>
              <li className='active'>   <a href="/Makeup">MAKEUP</a>  <p></p>
                <div className='submenu'>
                  <ul>
                    <li className='display'> <a href="/Makeup">Bridal Makeup </a>
                      <div className='submenu2'>
                        <div>
                          {
                            data.map((ans) => {
                              return (

                                <>
                                  <div>
                                    {/* <h1>{ans.id}</h1> */}

                                    <img src={ans.img} width="90%" height="130px" />

                                    <p1  >{ans.title}</p1>
                                    <br />
                                    <p1>{ans.name}</p1>

                                  </div>
                                </>

                              )
                            })
                          }
                          {/* <img  width="100%" height="130px"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp" alt="" />
        
           <img  width="100%" height="130px"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp" alt="" /> */}
                        </div>
                      </div>
                    </li>

                    <li> <a href="/Makeup">Celebrity Makeup</a> </li>
                    <li> <a href="/Makeup">Eye Make up</a></li>
                    <li> <a href="/Makeup" >Face Makeup</a></li>
                    <li> <a href="/Makeup">Lip Make up</a></li>
                    {/* <li> <a href="/Wealth">Lip Make up</a></li> */}

                  </ul>

                </div>
              </li>


              {/* ////////////Haircare/// */}

              <li className='active'>   <a href="/Haircare">HairCare</a>  <p></p>
                <div className='submenu-hc'>
                  <ul>
                    <li className='display'> <a href="/Haircare"> HAIR CARE IDEAS </a>
                      <div className='submenu2'>
                        <div>
                          {
                            hair.map((ans) => {
                              return (

                                <>
                                  <div>
                                    {/* <h1>{ans.id}</h1> */}

                                    <img src={ans.img} width="90%" height="130px" />

                                    <p1  >{ans.title}</p1>
                                    <br />
                                    <p1>{ans.name}</p1>

                                  </div>
                                </>

                              )
                            })
                          }
                          {/* <img  width="100%" height="130px"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp" alt="" />
        
           <img  width="100%" height="130px"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp" alt="" /> */}
                        </div>
                      </div>
                    </li>

                    <li> <a href="/Haircare">BASIC HAIR CARE</a> </li>
                    <li> <a href="/Haircare">DANDRUFF</a></li>
                    <li> <a href="/Haircare" > HAIR COLOUR</a></li>
                    <li> <a href="/Haircare"> HAIR FALL</a></li>
                    {/* <li> <a href="/Wealth">Lip Make up</a></li> */}

                  </ul>

                </div>
              </li>


              {/* ///////////////skin */}

              <li className='active'>   <a href="/SkinCare"> SKIN CARE</a>  <p></p>
                <div className='submenu-sc'>
                  <ul>
                    <li className='display'> <a href="/SkinCare"> Acne </a>
                      <div className='submenu2'>
                        <div>
                          {
                            skin.map((ans) => {
                              return (

                                <>
                                  <div>
                                    {/* <h1>{ans.id}</h1> */}

                                    <img src={ans.img} width="90%" height="130px" />

                                    <p1  >{ans.title}</p1>
                                    <br />
                                    <p1>{ans.name}</p1>

                                  </div>
                                </>

                              )
                            })
                          }
                          {/* <img  width="100%" height="130px"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp" alt="" />
        
           <img  width="100%" height="130px"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp" alt="" /> */}
                        </div>
                      </div>
                    </li>

                    <li> <a href="/SkinCare "> Anti Ageing</a> </li>
                    <li> <a href="/SkinCare "> Beauty Secrets</a></li>
                    <li> <a href="/SkinCare " > Dry Skin</a></li>
                    <li> <a href=" /SkinCare">Lip Make up</a></li>
                    {/* <li> <a href="/Wealth">Lip Make up</a></li> */}

                  </ul>

                </div>
              </li>

              {/* ///////////////styles */}

              <li className='active'>   <a href="/Hairstyles">HAIRSTYLES  </a>  <p></p>
                <div className='submenu-hs'>
                  <ul>
                    <li className='display'> <a href="/Hairstyles"> Bob Hairstyles</a>
                      <div className='submenu2'>
                        <div>
                          {
                            style.map((ans) => {
                              return (

                                <>
                                  <div>
                                    {/* <h1>{ans.id}</h1> */}

                                    <img src={ans.img} width="90%" height="130px" />

                                    <p1  >{ans.title}</p1>
                                    <br />
                                    <p1>{ans.name}</p1>

                                  </div>
                                </>

                              )
                            })
                          }
                          {/* <img  width="100%" height="130px"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp" alt="" />
        
           <img  width="100%" height="130px"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp" alt="" /> */}
                        </div>
                      </div>
                    </li>

                    <li> <a href="/Hairstyles"> Braid hairstyles</a> </li>
                    <li> <a href="/Hairstyles"> Bridal Hairstyles</a></li>
                    <li> <a href="/Hairstyles" > Bun Hairstyles</a></li>
                    <li> <a href="/Hairstyles"> Celebrity Hairstyles</a></li>
                    {/* <li> <a href="/Wealth">Lip Make up</a></li> */}

                  </ul>

                </div>
              </li>




              {/* ///////////////health */}

              <li className='active'>   <a href="/Wealth">HEALTH & WELLNESS  </a>  <p></p>
                <div className='submenu-hsw'>
                  <ul>
                    <li className='display'> <a href="/Wealth"> Fitness </a>
                      <div className='submenu2'>
                        <div>
                          {
                            health.map((ans) => {
                              return (

                                <>
                                  <div>
                                    {/* <h1>{ans.id}</h1> */}

                                    <img src={ans.img} width="90%" height="130px" />

                                    <p1  >{ans.title}</p1>
                                    <br />
                                    <p1>{ans.name}</p1>

                                  </div>
                                </>

                              )
                            })
                          }
                          {/* <img  width="100%" height="130px"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp" alt="" />
        
           <img  width="100%" height="130px"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp" alt="" /> */}
                        </div>
                      </div>
                    </li>

                    <li> <a href="/Wealth">    Health Devices</a> </li>
                    <li> <a href="/Wealth"> Ayurveda</a></li>
                    <li> <a href="/Wealth" > Diet Tips</a></li>
                    <li> <a href="/Wealth"> Health Conditions and Diseases</a></li>
                    {/* <li> <a href="/Wealth">Lip Make up</a></li> */}
                   
 
 
                  </ul>

                </div>
              </li>



              {/* /////////////// NEWS*/}

              <li className='active'>   <a href="/news"> NEWS  </a>  <p></p>
                <div className='submenu-hst'>
                  <ul>
                    <li className='display'> <a href="/news"> Collaboration</a>
                      <div className='submenu2'>
                        <div>
                          {
                            news.map((ans) => {
                              return (

                                <>
                                  <div>
                                    {/* <h1>{ans.id}</h1> */}

                                    <img src={ans.img} width="90%" height="130px" />

                                    <p1  >{ans.title}</p1>
                                    <br />
                                    <p1>{ans.name}</p1>

                                  </div>
                                </>

                              )
                            })
                          }
                          {/* <img  width="100%" height="130px"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp" alt="" />
        
           <img  width="100%" height="130px"
           src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp" alt="" /> */}
                        </div>
                      </div>
                    </li>

                    <li> <a href="/news">  Women Empowerment</a> </li>
                    <li> <a href="/news"> Relationships</a></li>
                    <li> <a href="/news" > Discover</a></li>
                    <li> <a href="/news"> Brand News</a></li>
                    {/* <li> <a href="/Wealth">Lip Make up</a></li> */}
      
                  </ul>

                </div>
              </li>



              <li> <a href="/tools">TOOLS</a>   </li>
              <li><a href="/Product">  PRODUCTS</a>  </li>
              <li> <a href="/aboutus"> ABOUT US</a>   </li>

            </ul>
          </div>






          {/* <div  className='route'>   */}
          {/* <p className='name'>  MAKEUP</p>  <p>|</p>
         {/* <div> */}


          {/* </div>
        <div>
         <p className='route'>
         <p className='name'>  HAIR</p> <p></p> 
          </p>
      </div>
      <div>
        <p className='route'> 
      <p className='name'> SKIN CARE</p>  <p></p>
        </p>
        </div>
        <div>
        <p className='route'> 
      <p className='name'> HAIRSTYLES </p>  <p></p>
        </p>
          </div>
          <div>
          <p className='route'> 
      <p className='name'>
          HEALTH & WELLNESS   </p>  <p></p>
        </p>
          </div>
          <div>
          <p className='route'> 
      <p className='name'>  NEWS  </p>  <p></p>
        </p>
          </div>
          <div>
       <p className='route'> 
      <p className='name'> TOOLS </p>  <p></p>
        </p>
          </div>
          <div>
          <p className='route'> 
      <p className='name'> PRODUCTS </p>  <p></p>
        </p>
            </div>
            <div>
            <p className='route'> 
      <p className='name'> ABOUT US  </p>   
        </p>
              </div>  */}
        </div>
      </div>
   
  )
}
