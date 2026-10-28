import Container from '../Components/Container'
import Flex from '../Components/Flex'
import ThemeCard from '../Components/ThemeCard'

  
  const Theme = () => {
    return (
      <section  className='bg-[#fcfcfc] pb-15 scroll-mt-24'>
        <Container>
            <h1 className='my-style text-center pb-15 pt-8.25'>What Customers Say About Our Themes</h1>
            <Flex className='theme-cards gap-x-7.5 '>
             {/* ----------------------First Card Start---------------------- */}
               <div className='theme-card-column'>
                    <ThemeCard descrip1="Great theme - easy to customise and fantastic for a portfolio / personal blog or resume site. The reason for 5 stars is incredible customer support - the developer helped to install the theme, responding extremely quickly to any queries (within a couple of hours usually) and going way beyond what would be expected to ensure that everything functioned perfectly."
                    heading="oliverdan " />
                    <ThemeCard descrip1="Great theme!"
                    descrip2="Very good design, very easy to customize and code quality is high level."
                    descrip3="I want to say that the customer support is something special - the author is fast response with details."
                    descrip4="Thanks!" descrip4Class="pt-[21px] themecard"
                    heading="razaviv" />
               </div>
              {/* ----------------------First Card End----------------------    */}

                {/* ----------------------Second Card start---------------------    */}
                <div className='theme-card-column'>
                    <ThemeCard descrip1="ok 1. Rocking customer support. Personal and fully professional. 2. The theme, one of those rare themes that says class, and simplicity. 3. It's not one of the millions of wp themes that looks like all others. unique and funky design, which is what everyone wants .... correct? 4. incredibly placed font 5. very customizable, including altering h1 h2 etc font types and sizes 6. and this is the best part,nothing is static, every thing is interchangeable .... yet the basic theme is there for copying. 7. Great documentation and assistance / guides. and on and on and on"
                    descrip2="Wish these guys would release more."
                    heading="hadzantonis"/>
                    <ThemeCard descrip1="Great design and easy customization. Recommended."
                    heading="unomas" headingClass="!pt-[0px]"/>
               </div>
               {/* ----------------------Second Card End---------------------    */}  

               <div className='theme-card-column'>
                    <ThemeCard descrip1="It's very easy to use to get a lot of information into the theme. I'm a broadcaster with a long career and many projects to share with prospective employers. I like to use my resume site as a repository for work as well."
                    descrip2="This theme makes it easy to get it all in there with a minimum of hassle (hint--if your portfolio grid is looking more masonary, put some padding to the right and left on the page set up. It will force them together and equalize heights)."
                    descrip3="A few more shortcodes support would be helpful in the future."
                    heading="syasko"/>
                    <ThemeCard descrip1="Support is super-responsive and very helpful. The theme is fantastic and easy to use, I recommend it!"
                    heading="Ephrem86" headingClass=""/>
               </div>

                
                  
                

          
      </Flex>
        </Container>
      </section>
    )
  }
  
  export default Theme
  