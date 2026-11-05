import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { IoLogoWindows } from 'react-icons/io5'
import { RiAppleFill } from 'react-icons/ri'
import productImage from '../assets/productimg.png'

const Product = () => {
    return (
        <section className='bg-[#f3f3f3]'>
            <Container>
                <h1 className='font-rale font-bold font- text-4xl leading-12 text-seventh md:w-[370px] mx-auto text-center pt-10 md:pt-[113px]'>All product work with several devices.</h1>
                <p className='font-robo font-normal text-base text-[#495e6c] leading-6.75 md:w-[454px] mx-auto pt-6.75 pb-8.5 text-center'>A great SaaS UI/UX design can make your product addictive and uncomfortable to give up.</p>
                <Flex className="flex-wrap gap-y-4 md:gap-y-0 gap-x-6 justify-center">
                    <div className='px-8 py-3 bg-seventh rounded-md '>
                        <Flex className="justify-center items-center gap-3.5 text-fifth">
                            <IoLogoWindows className='text-5xl' />
                            <div className='pt-2'>
                                <h3 className='font-rale font-bold text-base '>Get it on</h3>
                                <h2 className='font-rale font-bold text-2xl'>Windows 10</h2>
                            </div>

                        </Flex>

                    </div>
                    <div className='px-8 py-3 bg-seventh rounded-md '>
                        <Flex className="justify-center items-center gap-3.5 text-fifth">
                            <RiAppleFill className='text-5xl' />
                            <div className='pt-2'>
                                <h3 className='font-rale font-bold text-base '>Download on the </h3>
                                <h2 className='font-rale font-bold text-3xl '> App Store</h2>
                            </div>

                        </Flex>

                    </div>
                </Flex>
                <div className='md:w-[1145px] pt-[55px] pb-[70px]'>
                    <img src={productImage} alt="" className='w-full' />

                </div>
            </Container>
        </section>
    )
}

export default Product
