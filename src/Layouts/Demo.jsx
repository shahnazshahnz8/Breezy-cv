import Container from '../Components/Container'
import Flex from '../Components/Flex'
import demo1Image from '../assets/demo1.png'
import demo2Image from '../assets/demo2.png'
import demo3Image from '../assets/demo3.png'
import demo4Image from '../assets/demo4.png'
import demo5Image from '../assets/demo5.png'
import demo6Image from '../assets/demo6.png'
import demo7Image from '../assets/demo7.png'
import demo8Image from '../assets/demo8.png'
import demo9Image from '../assets/demo9.png'
import demo10Image from '../assets/demo10.png'
import demo11Image from '../assets/demo11.png'
import demo12Iage from '../assets/demo12.png'
import demo13Image from '../assets/demo13.png'
import demo14Image from '../assets/demo14.png'
import demo15Image from '../assets/demo15.png'
import demo16Image from '../assets/demo16.png'
import demo17Image from '../assets/demo17.png'
import demo18Image from '../assets/demo18.png'

const Demo = () => {
  return (
    <section className='pb-15 scroll-mt-24'>
      <Container>
        <h1 className='my-style text-center pb-7 pt-8'><span className='text-second'>8+</span> Unique Demos</h1>
        <Flex className="demo-cards flex-wrap gap-x-3.75 gap-y-7 ml-2 ">
          <img src={demo1Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo2Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo3Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo4Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo5Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo6Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo7Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo8Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo9Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo10Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo11Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo12Iage} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo13Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo14Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo15Image} alt="" className='w-[290px] h-[219px] hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo16Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo17Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />
          <img src={demo18Image} alt="" className='w-[290px] h-[219px]  hover:-translate-y-1 transition-transform duration-300' />

        </Flex>

      </Container>
    </section>
  )
}

export default Demo
