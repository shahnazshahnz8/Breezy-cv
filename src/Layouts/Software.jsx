import bgImage from '../assets/bgimage.png'
import Container from '../Components/Container'
import Image from '../Components/Image'
import software1Image from '../assets/software1.png'
import software2Image from '../assets/software2.png'
import software3Image from '../assets/software3.png'
import software4Image from '../assets/software4.png'
import software5Image from '../assets/software5.png'
import software6Image from '../assets/software6.png'
import software7Image from '../assets/software7.png'
import software8Image from '../assets/software8.png'

const Software = () => {
  return (
    <section
      className='bg-cover bg-no-repeat pt-25 pb-50 sm:pb-70 md:pb-80 lg:pb-100'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container className='px-4'>
        <div className='mx-auto grid max-w-[1240px] grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0'>
          <Image src={software1Image} alt='Software preview 1' className='h-auto w-full' />
          <Image src={software2Image} alt='Software preview 2' className='h-auto w-full' />
          <Image src={software3Image} alt='Software preview 3' className='h-auto w-full' />
          <Image src={software4Image} alt='Software preview 4' className='h-auto w-full' />
          <Image src={software5Image} alt='Software preview 5' className='h-auto w-full' />
          <Image src={software6Image} alt='Software preview 6' className='h-auto w-full' />
          <div className='col-span-full mx-auto grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:w-2/3'>
            <Image src={software7Image} alt='Software preview 7' className='h-auto w-full' />
            <Image src={software8Image} alt='Software preview 8' className='h-auto w-full' showOverlay={false} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Software
