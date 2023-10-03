import React from 'react'
import CountUp from 'react-countup'

function Us() {
  return (
    <div className='w-full  flex flex-col justify-center items-center gap-y-2'>
            <h3 className="font-MelbergHeavy text-xl">ABOUT US</h3>

      <div className='w-[90%] 
       rounded-[25px] grid grid-cols-2 p-4 gap-2 bg-black/20 '>
        <div className='w-full h-full  '>
          <div className='w-full h-[120px] bg-gray-600 flex flex-col justify-center items-center rounded-[25px]'>
            <h3 className='font-bold text-4xl'>
              
              
                <CountUp start={0} end={75} duration={5} />
              
              
              
              K</h3>
            <span className='font-MelbergRegular uppercase'>Mountains</span>
            </div>
        </div>
        <div className='w-full h-full '>
          <div className='w-full h-[120px] bg-gray-600 flex flex-col justify-center items-center rounded-[25px]'>
            <h3 className='font-bold text-4xl'><CountUp start={0} end={1000} duration={5} />K</h3>
            <span className='font-MelbergRegular uppercase'>Explorers</span>
            </div>
        </div>
        <div className='w-full h-full '>
          <div className='w-full h-[120px] bg-gray-600 flex flex-col justify-center items-center rounded-[25px]'>
            <h3 className='font-bold text-4xl'><CountUp start={0} end={800} duration={5} />K</h3>
            <span className='font-MelbergRegular uppercase'>Routes</span>
            </div>
        </div>
        <div className='w-full h-full '>
          <div className='w-full h-[120px] bg-gray-600 flex flex-col justify-center items-center rounded-[25px]'>
            <h3 className='font-bold text-4xl'><CountUp start={0} end={750} duration={5} />K</h3>
            <span className='font-MelbergRegular uppercase'>Flights</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Us