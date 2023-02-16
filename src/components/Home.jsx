import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#876853]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#253031]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-black'>Kenna Fackrell</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#253031]'>I'm a Full Stack Developer</h2>
        <p className='py-4 max-w-[700px]'>I'm a passionate developer ready to grow and learn new skills.
        </p>
        <div>
          <button className='text-black bg-[#0a8754] border-none border-2 px-6 py-3 my-2 flex items-center hover:bg-[#EBE9E9] '>View Work <HiArrowNarrowRight /></button>
        </div>
      </div>
    </div>
  )
}
 
export default Home