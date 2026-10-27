import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import footImage from '../assets/foot.webp'
import foot1Image from '../assets/foot1.webp'
import foot3Image from '../assets/foot3.webp'
import foot4Image from '../assets/foot4.webp'
import downloadImage from '../assets/download.webp'

const Download = () => {
  return (
    <section className='relative overflow-hidden bg-[#021433] pb-12 sm:pb-16 lg:pb-25'>
      <Container className=" px-4">
        <Flex className="flex-col items-center justify-between gap-4 pt-12 sm:flex-row sm:items-start sm:pt-16 lg:pt-24">
          <img src={footImage} alt="footImg" className='w-full max-w-[320px] -translate-x-2 sm:-translate-x-4 lg:w-[320px] lg:-translate-x-8 lg:translate-x-1 xl:-translate-x-70' />
          <img src={foot1Image} alt="foot1Img" className='w-full max-w-[320px] translate-x-2 sm:translate-x-4 lg:w-[320px] lg:-translate-x-8 lg:translate-x-1 xl:translate-x-70' />
        </Flex>
        <div className="flex justify-center px-4">
          <img src={downloadImage} alt="" className="h-auto w-[120px] max-w-full" />
        </div>
        <div className='relative'>
          <span aria-hidden='true' className='pointer-events-none absolute left-1/2 -top-8 w-max -translate-x-1/2 text-center font-inter text-5xl font-bold leading-none tracking-[-0.03em] bg-linear-to-b from-[rgba(94,92,250,0.04)] to-[rgba(94,92,250,0.1)] bg-clip-text text-transparent sm:-top-12 sm:text-[110px] md:-top-24 md:text-[170px] lg:-top-[210px] lg:text-[300px]'>Download</span>
          <h1 className='relative z-10 mx-auto w-full max-w-[1028px]  pt-5 pb-2 text-center font-han text-[clamp(1.75rem,5vw,65px)] leading-tight font-semibold text-white sm:pt-12.5'>Ready to Use our Theme? It’s just a matter of one click</h1>
        </div>
        <Flex className="flex-col items-center justify-between gap-4 sm:flex-row">
          <img src={foot3Image} alt="foot3Img" className='mt-6 w-full max-w-[320px] sm:mt-10 sm:w-[320px] sm:-translate-x-4 md:mt-14 lg:mt-12 lg:-translate-x-8 lg:translate-x-1 xl:-translate-x-65 xl:-mt-20' />
          <img src={foot4Image} alt="foot4Img" className='mt-6 w-full max-w-[320px] sm:mt-10 sm:w-[320px] sm:translate-x-4 md:mt-14 lg:mt-12 lg:-translate-x-8 lg:translate-x-1 xl:translate-x-65 xl:-mt-20' />
        </Flex>
      </Container>
    </section>
  )
}

export default Download
