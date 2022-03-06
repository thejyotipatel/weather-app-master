import React from 'react'
import Temp from './tem'
const WeatherBox = ({ dates, img, min, max }) => {
  return (
    <div className='text-gray-100 md:mb-4 md:mx-4 bg-[#1E213A]  mb-4  max-w-[120px] max-h-[177px] mx-[20px]  p-4'>
      <p className='text-[16px] font-medium text-center'> {dates}</p>
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
