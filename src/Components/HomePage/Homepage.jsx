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
        // console.log("makeup", res)
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
        // console.log("hcare", res)
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
        // console.log("skin", res)
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
        // console.log("style", res)
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
        // console.log("health", res)
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
        // console.log("news", res)
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
              <li className='active'>   <Link to="/Makeup">MAKEUP</Link>  <p></p>
                <div className='submenu'>
                  <ul>
                    <li className='display'> <Link to="/Makeup">Bridal Makeup </Link>
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

                    <li> <Link to="/Makeup">Celebrity Makeup</Link> </li>
                    <li> <Link to="/Makeup">Eye Make up</Link></li>
                    <li> <Link to="/Makeup" >Face Makeup</Link></li>
                    <li> <Link to="/Makeup">Lip Make up</Link></li>
                    {/* <li> <Link to="/Wealth">Lip Make up</Link></li> */}

                  </ul>

                </div>
              </li>


              {/* ////////////Haircare/// */}

              <li className='active'>   <Link to="/Haircare">HairCare</Link>  <p></p>
                <div className='submenu-hc'>
                  <ul>
                    <li className='display'> <Link to="/Haircare"> HAIR CARE IDEAS </Link>
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

                    <li> <Link to="/Haircare">BASIC HAIR CARE</Link> </li>
                    <li> <Link to="/Haircare">DANDRUFF</Link></li>
                    <li> <Link to="/Haircare" > HAIR COLOUR</Link></li>
                    <li> <Link to="/Haircare"> HAIR FALL</Link></li>
                    {/* <li> <Link to="/Wealth">Lip Make up</Link></li> */}

                  </ul>

                </div>
              </li>


              {/* ///////////////skin */}

              <li className='active'>   <Link to="/SkinCare"> SKIN CARE</Link>  <p></p>
                <div className='submenu-sc'>
                  <ul>
                    <li className='display'> <Link to="/SkinCare"> Acne </Link>
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

                    <li> <Link to="/SkinCare "> Anti Ageing</Link> </li>
                    <li> <Link to="/SkinCare "> Beauty Secrets</Link></li>
                    <li> <Link to="/SkinCare " > Dry Skin</Link></li>
                    <li> <Link to=" /SkinCare">Lip Make up</Link></li>
                    {/* <li> <Link to="/Wealth">Lip Make up</Link></li> */}

                  </ul>

                </div>
              </li>

              {/* ///////////////styles */}

              <li className='active'>   <Link to="/Hairstyles">HAIRSTYLES  </Link>  <p></p>
                <div className='submenu-hs'>
                  <ul>
                    <li className='display'> <Link to="/Hairstyles"> Bob Hairstyles</Link>
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

                    <li> <Link to="/Hairstyles"> Braid hairstyles</Link> </li>
                    <li> <Link to="/Hairstyles"> Bridal Hairstyles</Link></li>
                    <li> <Link to="/Hairstyles" > Bun Hairstyles</Link></li>
                    <li> <Link to="/Hairstyles"> Celebrity Hairstyles</Link></li>
                    {/* <li> <Link to="/Wealth">Lip Make up</Link></li> */}

                  </ul>

                </div>
              </li>




              {/* ///////////////health */}

              <li className='active'>   <Link to="/Wealth">HEALTH & WELLNESS  </Link>  <p></p>
                <div className='submenu-hsw'>
                  <ul>
                    <li className='display'> <Link to="/Wealth"> Fitness </Link>
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

                    <li> <Link to="/Wealth">    Health Devices</Link> </li>
                    <li> <Link to="/Wealth"> Ayurveda</Link></li>
                    <li> <Link to="/Wealth" > Diet Tips</Link></li>
                    <li> <Link to="/Wealth"> Health Conditions and Diseases</Link></li>
                    {/* <li> <Link to="/Wealth">Lip Make up</Link></li> */}
                   
 
 
                  </ul>

                </div>
              </li>



              {/* /////////////// NEWS*/}

              <li className='active'>   <Link to="/news"> NEWS  </Link>  <p></p>
                <div className='submenu-hst'>
                  <ul>
                    <li className='display'> <Link to="/news"> Collaboration</Link>
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

                    <li> <Link to="/news">  Women Empowerment</Link> </li>
                    <li> <Link to="/news"> Relationships</Link></li>
                    <li> <Link to="/news" > Discover</Link></li>
                    <li> <Link to="/news"> Brand News</Link></li>
                    {/* <li> <Link to="/Wealth">Lip Make up</Link></li> */}
      
                  </ul>

                </div>
              </li>



              <li> <Link to="/tools">TOOLS</Link>   </li>
              <li><Link to="/Product">  PRODUCTS</Link>  </li>
              <li> <Link to="/Linkboutus"> ABOUT US</Link>   </li>

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
