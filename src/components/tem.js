import React from 'react'

const Temp = ({ temps }) => {
  return (
    <p className='  text-gray-100  flex justify-center items-end'>
      <span className='material-icons   text-[10px] mb-5 font-[800] '>
        panorama_fish_eye
      </span>
      <span className='  text-[24px]  font-semibold  '>{temps}</span>
    </p>
  )
}

export default Temp
