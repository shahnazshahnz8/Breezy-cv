import Navbar from '../Layouts/Navbar'
import Hero from '../Layouts/Hero'
import Promotion from '../Layouts/Promotion'
import Data from '../Layouts/Data'
import Demo from '../Layouts/Demo'
import Theme from '../Layouts/Theme'
import Website from '../Layouts/Website'
import Footer from '../Layouts/Footer'
  
  
  const Home = () => {
    return (
      <>
        <Navbar/>
        <Hero/>
        <Promotion/>
        <Data/>
        <Demo/>
        <Theme/>
        <Website/>
        <Footer/> 
      </>
    )
  }
  
  export default Home
  