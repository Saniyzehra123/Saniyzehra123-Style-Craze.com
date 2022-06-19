import React from 'react'
import "../Aboutus/About.css"
import Footer from '../HomePage/Footer'
import Navbar from '../Navbar'

export default function Aboutus() {
  return (
    <div>
    <a href="/"> <Navbar/> </a>
      
    <div className='about'>
        <div>
            <h2>Empower and inspire women of today to lead healthier and happier lives</h2>
        <p> StyleCraze is a global women's platform that aims to answer one question: what do women want? From health and wellness to lifestyle and beauty – we provide answers to women in all spheres to celebrate their unique needs and individuality. Our goal is to empower women from all walks of life and various intersections of identity to lead healthier and happier lives.

We have a highly engaged audience of 25 million (and counting!) across all platforms. We focus on Health & Wellness, Skin Care, Hair Care, Makeup, Hairstyles, Fashion, Relationships, and more. Whether it is advice from a trusted expert or a DIY tutorial, we have it all covered..</p>
        
        </div>
        <div>
            <h2>Our Review Board</h2>
            <p>StyleCraze’s review board consists of a team of board-certified doctors, registered dietitians and nutritionists, dermatologists, and beauty and wellness experts who ensure that our articles are medically and factually accurate, evidence-based, current, relevant, and reader-centric. These highly experienced professionals not only verify the content but also add their unique perspectives based on their diverse experience and backgrounds in research and applied clinical practice.</p>
            
        </div>
        <div>
        <h2>Editorial Policies</h2>
            <p>StyleCraze’s articles are accurate, current, relevant, and actionable. They are written, edited, and fact-checked by qualified writers, editors, and other contributors who are experts in their areas. The articles are also fact-checked and reviewed by our team of reviewers to ensure the accuracy and relevancy of information provided in the articles.

Learn more about our editorial policy.</p>
            <p>read more</p>
        </div>
        <div>
        <h2> Our Team</h2>
            <p> The editorial team is responsible for managing all of the content on our website. Our experienced and certified editors and writers are specialists in their areas of coverage and break down complex information in a clear, easy-to-understand format.

Know more about our editorial and management teams.</p>
            <p>read more</p>
        </div>
        <div>
        <h2>
        Our Policies
        </h2>
            <p >Privacy Policy
StyleCraze has a strict privacy policy to protect the interests and concerns of its readers. The Privacy Policy details how we collect, use, and disclose information collected through our platforms.

Read our Privacy Policy.</p>
            <p>read more</p>
        </div>
         
        <div>
        <h2> Contact Us</h2>
            <p>We highly value your feedback/queries/suggestions. You can send them to support@stylecraze.com or contact us here.</p>
            <p>read more</p>
      </div>
        </div>

        <Footer/>
    </div>
    // </div>
  )
}
