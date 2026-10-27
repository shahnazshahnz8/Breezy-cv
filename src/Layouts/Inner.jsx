import React from 'react'
import Container from '../Components/Container'
import inner1Image from '../assets/inner1.png'
import inner2Image from '../assets/inner2.png'
import inner3Image from '../assets/inner3.png'
import inner4Image from '../assets/inner4.png'

const Inner = () => {
    return (
        <section className='overflow-hidden'>
            <Container className='relative px-4 pt-12 sm:pt-16 lg:pt-20'>
                <h4 className='text-center font-inter text-xl font-medium text-fourth sm:text-2xl'>Inner Pages</h4>
                <h1 className='pb-2 text-center font-han text-4xl font-semibold leading-[1.2] text-[#111111] sm:text-5xl lg:text-[70px]'>
                    Beautiful Inner Pages
                </h1>
                <span
                    aria-hidden='true'
                    className='pointer-events-none absolute left-1/2 top-[8%] -translate-x-1/2 whitespace-nowrap bg-linear-to-b from-[rgba(94,92,250,0.01)] to-[rgba(94,92,250,0.07)] bg-clip-text pb-4 text-[64px] leading-none tracking-[-0.03em] text-transparent sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[200px]'
                >
                    Inner Pages
                </span>
                <div className='grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 sm:gap-8 sm:py-16 lg:flex lg:gap-0 lg:py-30'>
                    <img className='h-auto w-full lg:min-w-0 lg:flex-1' src={inner1Image} alt='Inner page preview 1' />
                    <img className='h-auto w-full lg:min-w-0 lg:flex-1' src={inner2Image} alt='Inner page preview 2' />
                    <img className='h-auto w-full lg:min-w-0 lg:flex-1' src={inner3Image} alt='Inner page preview 3' />
                    <img className='h-auto w-full lg:min-w-0 lg:flex-1' src={inner4Image} alt='Inner page preview 4' />
                </div>
            </Container>
        </section>
    )
}

export default Inner
