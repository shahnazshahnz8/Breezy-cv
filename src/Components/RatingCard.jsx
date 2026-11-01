  import React from 'react'
  import Flex  from '../Components/Flex'
  
  const RadingCard = ({Image, alt, className,headingClass,textClass, heading, text}) => {
    return (
      <Flex className="pt-6.25 w-[350px]">
        <img src={Image} alt={alt} className={`pr-9 ${className}`} />
        <div>
            <h1 className={`font-inter font-bold text-[30px] text-sixth leading-10 ${headingClass}`}>{heading}</h1>
            <h4 className={`font-rale font-semibold text-base text-[#495e6c] leading-6.75 pt-4  ${textClass}`}>{text}</h4>
        </div>

      </Flex>
    )
  }
  
  export default RadingCard
  