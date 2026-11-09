import React, { useState } from 'react'
import Flex from '../Components/Flex'
import Container from '../Components/Container'
import { BsJustify } from 'react-icons/bs'
import PricingCard from '../Components/PricingCard'

const Pricing = () => {
  const [type, setType] = useState(false)
  
  return (
    <section className='pt-20 md:pt-[213px] pb-[90px]'>
      <Container>
        <h1 className='font-rale font-bold text-xl md:text-4xl leading-12 text-center text-seventh'>Affordable Pricing</h1>
        <Flex className="justify-center items-center">
          <h3 className='font-robo font-normal text-lg text-[#333333] leading-7.5 '>Monthly</h3>
          <div onClick={() => setType(!type)}
            className={`flex ${type ? "justify-start" : "justify-end"} w-[90px] h-[40px] rounded-full bg-sixth p-1.25 my-10 mx-6`}>

            <div className='w-7.5 h-7.5 rounded-full bg-fifth shadow-[0_1px_2px_0_#00000033]'></div>

          </div>
          <h5 className='font-robo font-normal text-lg text-[#5a7184] leading-7.5 '>Annualy</h5>
        </Flex>
        {type

          ?
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(2,minmax(0,366px))] justify-center sm:gap-4 lg:grid-cols-3 lg:gap-5 px-3">
            <PricingCard heading="Free Plan" price="$0" duration="/ monthly" />
            <PricingCard heading="Premium Plan" price="$599" duration="/ monthly" />
            <PricingCard heading="Business Plan" price="$999" duration="/ monthly" />
          </div>
          :
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(2,minmax(0,366px))] justify-center sm:gap-4 lg:grid-cols-3 lg:gap-5 px-3">
            <PricingCard heading="Free Plan" price="$0" duration="/ year" />
            <PricingCard heading="Premium Plan" price="$450" duration="/ year" />
            <PricingCard heading="Business Plan" price="$850" duration="/ year" />

          </div>
        }
      </Container>

    </section>
  )
}

export default Pricing
