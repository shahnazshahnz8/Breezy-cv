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
    <section className='pt-40 md:pt-50 pb-10 bg-[#0d554c] sm:bg-transparent relative md:pb-[113px] sm:after:absolute sm:after:top-0 sm:after:left-0 sm:after:content-[""] sm:after:w-full sm:after:h-full sm:after:bg-[#0d554c] sm:after:-z-1 sm:after:[clip-path:polygon(0_0,100%_0,100%_100%,0_60%)]'>
      <Container className='w-full max-w-[1170px]! sm:px-0'>
        <Flex className="block! md:flex! px-3">
          <div className='lg:w-[40%] pt-1 md:pt-12 text-center md:text-left '>
            <h4 className='font-rale font-bold text-lg text-fifth leading-5.5'>Business & Technologies</h4>
            <h1 className='my-style lg:w-[459px] text-fifth pt-2.75 pb-11'>We help tech companies deliver great software</h1>
            <p className='md:w-[370px] lg:w-[552px] leading-7 font-normal text-base font-robo text-fifth pb-3 md:pb-11'>Since 1999. For millions of users. We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow.</p>
            <div className='md:w-[400px] lg:w-[561px] relative'>
              <input type="text" className='w-full bg-fifth py-2.5 pl-2 pr-50 outline-sixth shadow-[0_15px_35px_0_#0c6f45/8] rounded-lg' />
              <button className='font-rale font-normal text-[14px] md:text-base  bg-sixth px-2  md:px-6.25 py-3 md:py-2.5 absolute top-0 right-0 rounded-r-[7px] text-fifth'>Request for Demo</button>
            </div>
          </div>
          <div className='lg:w-[60%] md:w-[900px] lg:w-[956px] md:-translate-10 lg:translate-x-40 pb-10 md:pb-40 lg:pb-100 pt-10  md:mr-4 lg:mr-4'>
            <img src={sassheroImage} alt="" className='w-full h-auto' />
          </div>
        </Flex>
        <div className='relative z-10 mx-auto mt-4 w-full max-w-[1146px] bg-fifth p-5 shadow-[0_7px_40px_rgba(0,0,0,0.12)] sm:p-8 md:p-10 lg:absolute lg:left-1/2 lg:top-[70%] lg:mt-0 lg:w-[calc(100%-2rem)] lg:-translate-x-1/2 xl:w-[1146px]'>
          <Flex className="flex-col gap-6 border-b border-[#0000001a] px-0 pb-6 sm:px-3 md:flex-row md:items-start md:justify-between md:pb-0">
            <div className='min-w-0 pt-2 md:pt-[31px]'>
              <h6 className='font-rale text-center text-[14px] font-bold text-sixth md:text-left'>Who we are?</h6>
              <h1 className='pt-4.25 text-center font-rale text-2xl font-bold text-seventh sm:text-3xl md:w-full md:max-w-[750px] md:pb-[70px] md:text-left lg:text-[36px]'>More than 5,000 users around the world are already using STDEV actively</h1>
            </div>
            <div className='mx-auto min-h-0 w-[178px] justify-center bg-[#cfdddb] px-6 py-5 md:mb-12.5 md:px-[45px] md:pt-[31px]'>
              <h1 className='font-inter text-[42px] leading-15.5 font-bold tracking-[2.5px] sm:text-[50px] text-center '>4.8</h1>
              <Flex className="justify-center">
                <IoIosStar className='text-[#ff7282] text-base' />
                <IoIosStar className='text-[#ff7282] text-base' />
                <IoIosStar className='text-[#ff7282] text-base' />
                <IoIosStar className='text-[#ff7282] text-base' />
                <IoIosStar className='text-[#ff7282] text-base' />
              </Flex>
              <h4 className='pt-2.5 font-robo text-base font-normal text-[#495e6c] md:pb-11 text-center '>35 Reviews</h4>

            </div>
          </Flex>

          <Flex className="flex-col gap-5 pt-5 sm:grid sm:grid-cols-2 md:flex md:flex-row md:gap-4 lg:gap-6">
            <RatingCard Image={ratingImage} heading="70+ " text="Professionals" textClass="" />

            <RatingCard Image={rating1Image} heading="22 Years" text="Year of experience" textClass="w-[150px]" />

            <RatingCard Image={rating2Image} heading="$40+M" text="Fundraised by customers" textClass="w-[191px]" />
          </Flex>

        </div>
      </Container>

    </section>
  )
}

export default SassHero
