  import Container from '../Components/Container'
import CoreCard from '../Components/CoreCard'
import coreImg from '../assets/coreimg.png'
import coreImg1 from '../assets/coreimg1.png'
import coreImg2 from '../assets/coreimg2.png'
import coreImg3 from '../assets/coreimg3.png'
import coreImg4 from '../assets/coreimg4.png'
import coreImg5 from '../assets/coreimg5.png'
import coreImg6 from '../assets/coreimg6.png'
import coreImg7 from '../assets/coreimg7.png'
import coreImg8 from '../assets/coreimg8.png'
  
  const Core = () => {
    return (
      <section className='relative overflow-hidden bg-[#f7f8fe] pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 lg:pt-32.5 lg:pb-25'>
        <Container>
            <h4 className='relative z-10 mt-2.5 text-center font-inter text-lg font-medium text-fourth sm:text-2xl'>Best Features</h4>
            <h1 className='relative z-10 mx-auto max-w-full pb-2 text-center font-han text-3xl font-semibold leading-[1.2] text-[#111111] sm:text-5xl lg:text-[70px]'>Theme Core Features</h1>
            <span aria-hidden='true' className='pointer-events-none absolute left-1/2 top-12 w-max -translate-x-1/2 text-center text-[64px] font-bold leading-none tracking-[-0.03em] bg-linear-to-b from-[rgba(94,92,250,0.04)] to-[rgba(94,92,250,0.1)] bg-clip-text text-transparent sm:top-14 sm:text-[110px] md:text-[170px] lg:top-15 lg:text-[300px]'>Features</span>

           <div className='relative z-10 mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:mt-40 lg:grid-cols-3'>
             <CoreCard Image={coreImg} 
            text="Full Demo With One Click Installation"
            textClass="max-w-[300px] mx-auto text-center"
            />
             <CoreCard Image={coreImg1} 
            text="Elementor Page Builder"
            textClass="max-w-[300px] mx-auto text-center"
            />
             <CoreCard Image={coreImg2} 
            text="User Friendly Code & Easy Editable"
            textClass="max-w-[300px] mx-auto text-center"
            />
             <CoreCard Image={coreImg3} 
            text="Power Full Theme Options (Codestar Framework)"
            textClass="max-w-[300px] mx-auto text-center"
            />
             <CoreCard Image={coreImg4} 
            text="Fully Responsive Layout For all Devices"
            textClass="max-w-[300px] mx-auto text-center"
            />
             <CoreCard Image={coreImg5} 
            text="SEO and SMM Friendly"
            textClass="max-w-[300px] mx-auto text-center"
            />
             <CoreCard Image={coreImg6} 
            text="Lifetime Update"
            textClass="max-w-[300px] mx-auto text-center"
            />
             <CoreCard Image={coreImg7} 
            text="Faster Loading"
            textClass="max-w-[300px] mx-auto text-center"
            />
             <CoreCard Image={coreImg8} 
            text="Well Documented"
            textClass="max-w-[300px] mx-auto text-center"
            />
           </div>
        </Container>
      </section>
    )
  }
  
  export default Core
  