   import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import dataImage from '../assets/data.png'
   
   const Data = () => {
     return (
       <section className=' relative mb-15 after:absolute after:top-0 after:left-0 after:content-[""] after:bg-[#f5f5f5] after:-z-1 after:w-full after:h-full  after:[clip-path:polygon(0_0,100%_0,100%_50%,0_100%)]'>
         <Container>
            <Flex className="data-part">
                  <div className='w-1/2 pt-52.5 pb-55.5'>
                      <h1 className='my-style w-115.75'>Install Theme & Demo Data in <span className='text-second'>2 Minutes</span></h1>
                  </div>
                  <div className='w-147.5 h-125 pt-15 relative hover:absolute hover:top-0 hover:left-0 duration-100 '>
                      <img src={dataImage} alt="data" className='w-full h-full' />
                  </div>
            </Flex>
         </Container>
       </section>
     )
   }
   
   export default Data
   