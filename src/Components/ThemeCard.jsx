  import React from 'react'
  import { IoStar } from "react-icons/io5";
  import Flex from '../Components/Flex'

  
  const ThemeCard = ({descrip1, descrip2, descrip3, descrip4, heading, descrip1Class,descrip2Class, descrip3Class, descrip4Class, headingClass}) => {
    return (
      <div className=' px-6.25 pt-6.25 pb-2.5 shadow-[0_0_25px_0_#0000002e] rounded-lg hover:translate-x-1 transition-transform duration-300'>
                      <p className={`my-style1 w-78.25 ${descrip1Class}`}>{descrip1}</p>
                       <p className={`my-style1 w-78.25 pt-3.5 ${descrip2Class}`}>{descrip2}</p>
                      <p className={`my-style1 w-78.25 pt-3.5 ${descrip3Class}`}>{descrip3}</p>
                      <p className={`my-style1 w-78.25 ${descrip4Class}`}>{descrip4}</p>
                     <h3 className={`font-Mont font-bold text-4.25 text-first w-78.25 pt-3.75 pb-1.25 ${headingClass}`}>{heading}</h3>
                     <p className='my-style1 w-78.25 pb-1.25'>Themeforest Customer</p>
        
                     
                  <Flex>

                  <IoStar className='text-[#ffcd38] mb-2.5 text-[20px]'/>
                   <IoStar className='text-[#ffcd38] mb-2.5 text-[20px]'/>
                   <IoStar className='text-[#ffcd38] mb-2.5 text-[20px]'/>
                   <IoStar className='text-[#ffcd38] mb-2.5 text-[20px]'/>
                   <IoStar className='text-[#ffcd38] mb-2.5 text-[20px]'/>
                 </Flex>
         
       </div>
    )
  }
  
  export default ThemeCard
  