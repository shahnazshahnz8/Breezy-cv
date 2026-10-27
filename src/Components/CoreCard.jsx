
  const CoreCard = ({Image, text, textClass}) => {
    return (
      <div className='w-full max-w-110 bg-fifth p-6 sm:p-8 lg:p-12'>
        <img src={Image} alt="#" className='block mx-auto pb-7.5'/>
        <h1 className={`font-han text-xl font-bold leading-7 text-[#111111] sm:text-2xl sm:leading-9.5 ${textClass}`}>{text}</h1>
      </div>
    )
  }
  
  export default CoreCard
  