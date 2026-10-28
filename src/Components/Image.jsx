const Image = ({ src, alt, className, showOverlay = true }) => {
  return (

    <div className="group relative block w-full overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={`block h-auto w-full ${className}`}
      />

      {showOverlay && (
        <div className="absolute inset-x-0 top-[3%] bottom-[17%] bg-[#051201]/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className='flex justify-center items-center inset-0 absolute gap-4'>
            <button className='text-white text-sm font-semibold font-inter bg-fourth py-2.5 px-7.5 rounded-[30px]'>multipage</button>
            <button className='text-fourth text-sm font-semibold font-inter bg-white border border-[##FC5546] py-2.5 px-7.5 rounded-[30px]'>onepage</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Image
