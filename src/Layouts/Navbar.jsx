import { Link } from 'react-router'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import logoImage from '../assets/Images/logo.png'

const Navbar = () => {
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
            <li>Features</li>
            <li>Demos</li>
            <li><span className="text-second">Reviews</span></li>
          </ul>
          <details className="mobile-nav relative md:hidden">
            <summary className="flex cursor-pointer list-none flex-col gap-y-1 p-2" aria-label="Toggle navigation menu">
              <span className="h-0.5 w-5 bg-black" />
              <span className="h-0.5 w-5 bg-black" />
              <span className="h-0.5 w-5 bg-black" />
            </summary>
            <ul className="absolute right-0 top-full flex min-w-40 flex-col items-center gap-y-2 bg-white p-4 font-Mont font-semibold text-[15px] leading-7.75 text-first shadow-[0_0_15px_0_#00000026]">
              <li><Link to="/about">About</Link></li>
              <li>Features</li>
              <li>Demos</li>
              <li><span className="text-second">Reviews</span></li>
            </ul>
          </details>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar
