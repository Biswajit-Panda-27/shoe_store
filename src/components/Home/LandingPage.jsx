import React, { useEffect } from 'react'
import Hero from './Hero'
import Banner from './Banner'
import WhyChoose from './WhyChoose'
import About from './About'
import Contact from './Contact'
import AOS from "aos";
import "aos/dist/aos.css";


const LandingPage = () => {

    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
        
    
    }, []);
  return (
    <div>
        <Hero/>
        <Banner/>
        <WhyChoose/>
        <About/>
        <Contact/>
      
    </div>
  )
}

export default LandingPage
