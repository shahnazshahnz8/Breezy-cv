  import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import heroImage from '../assets/Images/hero.jpg'
  
  const Hero = () => {
    return (
      <section id='about' className=' relative pt-36.75 pb-12.5 after:bg-second after:absolute after:top-0 after:left-0 after:content-[""]  after:w-full after:h-full after:-z-1 after:[clip-path:polygon(0_0,100%_0,100%_50%,0_100%)]'>
       
              
        <Container>
            <Flex className=" hero justify-between">
              {/* -------- Hero left div start------- */}
                <div className='max-w-1/2 '>
                    <h1 className='font-Mont font-bold text-[44px] leading-14.25 text-[#ffffff] w-147.5 pt-4 pb-[14.3px]'>Premium Resume, CV, vCard & Portfolio WordPress Theme</h1>
                    <p className='font-Mont font-normal text-[19px] leading-7 text-[#f5f5f5]  w-147.5 pb-3.75'>You do not need to be a web development   professional to create your own creative website using BreezyCV</p>
                  
                        <button className='btn1 bg-[#ffffff] text-first rounded-lg py-3 px-4.5 font-Mont font-semibold text-[15px] leading-[26.3px] hover:-translate-y-1.5 transition-transform duration-200'>View Demos</button>
                        <button className='btn2 bg-[#ffffff] text-first rounded-lg py-3 px-4.5 font-Mont font-semibold text-[15px] leading-[26.3px] ml-3 hover:-translate-y-1.5 transition-transform duration-200'>Get it Now!</button>
                    
                </div>
            { /* -------- Hero left div end------- */}

                 {/* ----------- Hero right part start------------ */}

                 <div className='relative group overflow-hidden w-1/2  h-101.75 '>
                  <img src={heroImage} alt="hero" className='w-full h-full '/>
                  <div className='absolute -top-full left-0 w-full h-101.75 bg-linear-to-r from-[#4d5ae8]/60 to-[#09aeea]/60  group-hover:top-0 duration-220'></div>
                </div>
                
                {/* ----------- Hero right part end------------ */}

            </Flex>
               
            
        </Container>
        

    
          
        
      </section>
    )
  }
  
  export default Hero
  