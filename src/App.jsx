  import React from 'react'
import Container from './Components/Container'
import Navbar from './Layouts/Navbar'
import Flex from './Components/Flex'
import Hero from './Layouts/Hero'
import Promotion from './Layouts/Promotion'
import Data from './Layouts/Data'
import Demo from './Layouts/Demo'
import Theme from './Layouts/Theme'
import Website from './Layouts/Website'
import Footer from './Layouts/Footer'
  
  const App = () => {
    return (
      <>
        <Container></Container>
        <Flex></Flex>
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
  
  export default App
  