import { Link } from 'react-router-dom'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import logoImage from '../assets/Images/logo.png'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {
  let [bar, setBar] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-[0_0_15px_0_#00000026] box-border py-7">
      <Container className="px-4">
        <Flex className="nav-part items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img src={logoImage} alt="BreezyCV home" />
            </Link>
          </div>
          <ul className="hidden items-center gap-x-11 font-Mont font-semibold text-[15px] leading-7.75 text-first md:flex">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li>Demos</li>
            <li><span className="text-second">Reviews</span></li>
          </ul>

            {/* -----------------------Mobile nav--------------------------- */}

          <div className="relative md:hidden">
            {
              bar 
              ? 
              <RxCross2 onClick={()=> setBar (!bar)} className='text-2xl font-bold'/>
              :
              <FaBars onClick={()=> setBar (!bar)} className='text-2xl'/>
             
 
            }
            

              {
                bar
                &&
            <ul className="absolute right-0 top-full flex min-w-40 flex-col items-center gap-y-2 bg-white p-4 font-Mont font-semibold text-[15px] leading-7.75 text-first shadow-[0_0_15px_0_#00000026]">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/features">Features</Link></li>

              <li>Demos</li>
              <li><span className="text-second">Reviews</span></li>
            </ul>

              }

          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar
