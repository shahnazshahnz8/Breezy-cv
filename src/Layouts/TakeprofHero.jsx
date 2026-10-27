import Container from '../Components/Container'

const TakeprofHero = () => {
    return (
        <section className='pt-40 sm:pt-20 lg:pt-33'>
            <Container>
                <h1 className='mx-auto w-full max-w-[1200px] px-4 text-center font-han text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-[85px] lg:leading-[96px]'>IT Solution & Technology
                    WordPress Theme</h1>
                <p className='mx-auto w-full max-w-[865px] px-4 py-7.5 text-center font-inter text-base leading-7 text-[#111111b3] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-9'>Tekprof is a Modern <span className='text-fourth'>WordPress Theme</span> that is perfectly suitable for the Agency, Apps, SaaS
                    and Software, start-ups, IT Solutions, and Services Companies related to any business
                    website.</p>
                    <button className='mx-auto block rounded-full bg-fourth px-6 py-3 font-inter text-[14px] text-fifth sm:px-7.5 sm:py-2.5'>View All Demos</button>
            </Container>
        </section>
    )
}

export default TakeprofHero
