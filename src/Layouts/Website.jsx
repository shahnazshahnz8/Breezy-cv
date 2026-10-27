import Container from '../Components/Container'
   
   const Website = () => {
     return (
       <section className='website-cta bg-[#f3f3f3] pb-15'>
          <Container>
                <h1 className='my-style text-center pt-18.25 pb-12'>Start Your Website Today!</h1>
                <button className='font-Mont font-semibold text-4.25 leading-6.5 bg-linear-to-r from-[#9700E5] via-[#4D5AE8] to-[rgb(9,174,234)] py-3 px-4.5 text-[#ffffff] rounded-lg mx-auto flex justify-center hover:-translate-y-1 transition-transform duration-300'>Get it Now!</button>
          </Container>
       </section>
     )
   }
   
   export default Website
   