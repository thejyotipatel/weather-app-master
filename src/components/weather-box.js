import React from 'react'
import Temp from './tem'
const WeatherBox = ({ dates, img, min, max }) => {
  return (
    <div className='text-gray-100 md:mb-4 md:mx-4 max-w-[80%] bg-main-color  mb-4  sm:max-w-[180px] px-8 sm:px-4 max-h-[180px] mx-[20px]  p-2 w-full rounded-sm'>
      <p className='text-[16px] font-medium text-center mb-4'> {dates}</p>
      <img src={img} alt='img' className=' w-[60px] h-[62px]  mx-auto  ' />
      <div className='flex justify-between mt-4  '>
        <div className='flex justify-center items-center   '>
          <span className='  text-[16px] font-semibold '>{min}</span>
          <Temp temps={'C'} />
        </div>
        <div className='flex justify-center    items-stretch'>
          <span className=' text-[16px] font-semibold  '>{max}</span>
          <Temp temps={'C'} />
        </div>
      </div>
    </div>
  )
}

export default WeatherBox
