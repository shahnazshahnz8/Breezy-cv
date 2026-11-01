import Container from '../Components/Container'
import Flex from '../Components/Flex'
import sassheroImage from '../assets/sasshero.png'
import { IoIosStar } from "react-icons/io";
import RatingCard from '../Components/RatingCard'
import ratingImage from '../assets/rating.png'
import rating1Image from '../assets/rating1.png'
import rating2Image from '../assets/rating2.png'


const SassHero = () => {
  return (
    <section className='pt-50  pb-[113px] relative after:absolute after:top-0 after:left-0 after:content-[""] after:w-full after:h-full after:bg-[#0d554c] after:-z-1 after:[clip-path:polygon(0_0,100%_0,100%_100%,0_60%)]'>
      <Container className='w-full max-w-[1170px]!'>
        <Flex>
          <div className='w-[40%] pt-12'>
            <h4 className='font-rale font-bold text-lg text-fifth leading-5.5'>Business & Technologies</h4>
            <h1 className='my-style w-[459px] text-fifth pt-2.75 pb-11'>We help tech companies deliver great software</h1>
            <p className='w-[552px] leading-7 font-normal text-base font-robo text-fifth pb-11'>Since 1999. For millions of users. We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow.</p>
            <div className='w-[561px] relative'>
              <input type="text" className='w-full bg-fifth py-2.5 pl-2 pr-50 outline-sixth shadow-[0_15px_35px_0_#0c6f45/8] rounded-lg' />
              <button className='font-rale font-normal text-base  bg-sixth px-6.25 py-2.5 absolute top-0 right-0 rounded-r-[7px] text-fifth'>Request for Demo</button>
            </div>
          </div>
          <div className='w-[60%]  w-[956px]  translate-x-40 pb-90'>
            <img src={sassheroImage} alt="" className='w-full h-auto' />
          </div>
        </Flex>
        <div className='absolute left-1/2 top-[70%]   max-w-[1146px] -translate-x-1/2 bg-fifth p-12.5 shadow-[0_7px_40px_rgba(0,0,0,0.12)]'>
          <Flex className="justify-between border-b border-[#0000001a]">
            <div className='pt-[31px]'>
            <h6 className='font-rale font-bold text-[14px] text-sixth'>Who we are?</h6>
            <h1 className='font-rale font-bold text-[36px] text-seventh w-[750px] pt-4.25 pb-[70px] '>More than 5,000 users around the world are already using STDEV actively</h1>
          </div>
          <div className='pt-[31px] px-[45px] bg-[#cfdddb] mb-12.5'>
            <h1 className='font-inter font-bold text-[50px] leading-15.5 tracking-[2.5px]'>4.8</h1>
            <Flex>
              <IoIosStar className='text-[#ff7282] text-base' />
              <IoIosStar className='text-[#ff7282] text-base' />
              <IoIosStar className='text-[#ff7282] text-base' />
              <IoIosStar className='text-[#ff7282] text-base' />
              <IoIosStar className='text-[#ff7282] text-base' />
            </Flex>
            <h4 className='font-robo font-normal text-base text-[#495e6c] pt-2.5 pb-11'>35 Reviews</h4>

          </div>
          </Flex>
          
          <Flex className="">
            <RatingCard Image={ratingImage} heading="70+ " text="Professionals" textClass=""/>

          <RatingCard Image={rating1Image} heading="22 Years" text="Year of experience" textClass="w-[150px]"/>

          <RatingCard Image={rating2Image}  heading="$40+M" text="Fundraised by customers" textClass="w-[191px]"/>
          </Flex>
          
        </div>
      </Container>

    </section>
  )
}

export default SassHero
