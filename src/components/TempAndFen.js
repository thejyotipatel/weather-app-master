import React from 'react'

const TempAndFen = () => {
  return (
    <div className='right-[120px] md:right-4 absolute md:grid grid-cols-2 hidden '>
      <button className=' bg-[#fff] outline-none grid  w-[40px] h-[40px] rounded-[50%] place-content-center  m-4'>
        <p className='  text-[#000]  flex justify-center items-end'>
          <span className='material-icons   text-[10px] mb-5 font-[900] '>
            panorama_fish_eye
          </span>
          <span className='  text-[24px]  font-semibold  '>C</span>
        </p>
      </button>
      <button className=' bg-[#585676] outline-none grid  w-[40px] h-[40px] rounded-[50%] place-content-center  m-4'>
        <p className='  text-[#fff]  flex justify-center items-end'>
          <span className='material-icons   text-[10px] mb-5 font-[800] '>
            panorama_fish_eye
          </span>
          <span className='  text-[24px]  font-semibold  '>F</span>
        </p>
      </button>
    </div>
  )
}

export default TempAndFen
