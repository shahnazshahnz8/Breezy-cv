import React from 'react'
import { FaCheck } from 'react-icons/fa'

const PricingCard = ({ heading, price, duration,className }) => {
    return (
        <div className={`md:w-[366px] bg-[#f3f3f3] rounded-[10px] pt-[50px] ${className}`}>

            <h1 className='font-rale font-bold text-[22px] leading-[29.44px] text-seventh pl-7.5'>{heading}</h1>

            <h2 className="text-5xl font-bold font-inter leading-[81.6px] text-seventh pl-8.25 pt-1.5 pb-8.75  ">{price}
                <span className="font-robo font-semibold text-base text-[#6E8393] ">{duration}</span> </h2>
                <div className='border-2 border-b border-[rgba(44,131,187,0.25)] mx-7.5'></div>
            <h4 className='font-robo font-normal text-base text-[#495e6c] pt-9 pb-7  pl-7.5 inline-block'><FaCheck className='inline-block text-sixth mr-5' /> Access to editing all blocks</h4>
            <h4 className='font-robo font-normal text-base text-[#495e6c]  pb-7  pl-7.5 inline-block'><FaCheck className='inline-block text-sixth mr-5' /> Editing blocks together</h4>
            <h4 className='font-robo font-normal text-base text-[#495e6c]  pb-7  pl-7.5 inline-block'><FaCheck className='inline-block text-sixth mr-5' /> Access to all premium icons</h4>
            <h4 className='font-robo font-normal text-base text-[#495e6c]  pb-7  pl-7.5 inline-block'><FaCheck className='inline-block text-sixth mr-5' /> A dedicated domain</h4>
            <button className='font-rale font-semibold text-base text-fifth bg-sixth py-5 px-12.5 ml-7.5 mb-10 rounded-lg mt-1'>Try for Free</button>
        </div>
    )
}

export default PricingCard
