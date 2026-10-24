 import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import logoImage from '../assets/Images/logo.png'
    
 
 const Navbar = () => {
   return (
     <nav className='  fixed  top-0 left-0 right-0 z-50 w-full bg-[#ffffff] shadow-[0_0_15px_0_#00000026] box-border pt-6.25 pb-6.75'>
        <Container>
            
               <Flex className=" nav-part justify-between items-center">
                     <div>
                    <img src={logoImage} alt="" />
                </div>
                <ul className='flex gap-x-11 font-Mont font-semibold text-[15px] leading-7.75 text-first '>
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#demo">Demos</a></li>
                    <li><span className='text-second'><a href="#theme">Reviews</a></span></li>
                </ul>
               </Flex>
        
        </Container>
     </nav>
   )
 }
 
 export default Navbar
 