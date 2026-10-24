import React from 'react'
import Container from '../Components/Container'
import PromotionCard from '../Components/PromotionCard'
import promotion1Image from '../assets/promotion1.png'
import promotion2Image from '../assets/promotion2.png'
import promotion3Image from '../assets/promotion3.png'
import promotion4Image from '../assets/promotion4.png'
import promotion5Image from '../assets/promotion5.png'
import promotion6Image from '../assets/promotion6.png'
import promotion7Image from '../assets/promotion7.png'
import promotion8Image from '../assets/promotion8.png'

import Flex from '../Components/Flex'

const Promotion = () => {
  return (
    <section id='features' className='pb-15 scroll-mt-40'>
      <Container>
        <h1 className=' promotion my-style  pt-13 pb-15 text-first text-center'>Powerful Theme For Your Promotion</h1>
        <Flex className="flex-wrap gap-x-4 gap-y-19.25 ml-10">
          <PromotionCard Image={promotion1Image}
            heading="Fully Responsive" description="BreezyCV ready to look stunning on any device – from a widescreen monitor to a mobile phone." />
          <PromotionCard Image={promotion2Image}
            heading="Elementor Page Builder" description="BreezyCV comes with a full fledged drag & drop page builder that let you create countless pages using the content and media shortcodes." descriptionClass=""/>
          <PromotionCard Image={promotion3Image}
            heading="1 Click Demo Installer"
             description="BreezyCV comes with a built in Content Demo Installer. You will be able to install theme content as it is displayed on our theme demo site." />
          <PromotionCard Image={promotion4Image}
            heading="Easy Customizable" description="Easier to create professional websites in no time, even without knowledge of HTML/CSS/PHP, without involvement of developers. " />
          <PromotionCard Image={promotion5Image}
            heading="Advanced Resume" description="BreezyCV clearly communicates your job history, work experience, accomplishments, and education – in the order you desire." />
          <PromotionCard Image={promotion6Image}
            heading="Powerful Portfolio" description="Your works or products will have noticed by your visitors. BreezyCV offers a great range of choices for creating your portfolio or a gallery." />
          <PromotionCard Image={promotion7Image}
            heading="47+ Shortcodes" description="BreezyCV contains pre-made pages and shortcodes helps you build your WordPress websites, with its clean and unique design." />
          <PromotionCard Image={promotion8Image}
            heading="24/7 Support" description="You will receive 24/7 support from our dedicated Support Team, which is at the 5 star level in case any assistance is required."  />


        </Flex>

      </Container>
    </section>
  )
}

export default Promotion
