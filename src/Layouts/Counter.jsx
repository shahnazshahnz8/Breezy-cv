import React, { useState } from 'react'
import Container from '../Components/Container'

const Counter = () => {
  let [count, setCount] = useState(0)
  return (
    <section className='pt-32 pb-12 bg-[#F3F5F9]'>
      <Container>
        <div className='flex min-h-0 flex-col items-center justify-center'>
          <h1 className='font-rale font-bold text-4xl '>counter {count}</h1>
          <div className='flex flex-col gap-y-3 sm:gap-y-0 sm:block pt-4'>
            <button onClick={() => setCount(count + 1)} className='font-rale font-semibold text-3xl bg-second text-fifth px-8 py-3 mr-4 rounded-2xl'>Increment</button>
            <button onClick={() => setCount(count - 1)} className='font-rale font-semibold text-3xl bg-second text-fifth px-8 py-3 rounded-2xl'>Decrement</button>
          </div>
          <button onClick={() => setCount(0)} className='font-rale font-semibold text-3xl bg-second text-fifth px-25 py-4 sm:px-45 sm:py-3 rounded-2xl mt-4 mx-2'>Reset</button>
        </div>
      </Container>
    </section>
  )
}

export default Counter
