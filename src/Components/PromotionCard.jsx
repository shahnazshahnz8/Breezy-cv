 
  const PromotionCard = ({Image, heading, description,className,descriptionClass,headingClass}) => {
     const words = heading.split(" ")
    return(
      
            <div className="flex flex-col items-center justify-center gap-y-4.5 w-70">
               <img src={Image} alt="#" className={` w-40 h-40 rounded-full hover:-translate-y-1.5 transition-transform duration-200 ${className}`}/>
               <h3 className={`font-Mont font-bold text-lg leading-5.75 text-first  ${headingClass}`}>
                <span className="text-second">{words[0]}</span>{" "}
                <span className="text-first">{words.slice(1).join(" ")} </span>

             </h3>
               <p className={`font-Mont font-normal text-[15px] leading-6.5 text-third pt-4 pb-1.5 text-center ${descriptionClass}`}>{description}</p>
           </div>
      
     
    )
  }
  
  export default PromotionCard
  