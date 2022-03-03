import React from 'react'
import Hail from '../images/Hail.png'
import img from '../images/Cloud-background.png'

const Sidebar = () => {
  return (
    <>
      <div className={`  w-full max-w-[500px]       bg-main-color `}>
        <div className='m-5 mt-8 flex justify-between items-center  '>
          <input
            type='text'
            name='query'
            placeholder='Search for places'
            className='p-2 sm:m-2 border-x-0 text-gray-50 font-medium text-[24px] bg-[#6E707A] w-fit  outline-none rounded-sm'
          />
          <button className=' bg-[#6E707A] outline-none grid  w-[50px] h-[50px] rounded-[50%] place-content-center  '>
            <span className='material-icons text-gray-100 text-[36px] '>
              gps_fixed
            </span>
          </button>
        </div>
        {/* <div
          style={{ backgroundImage: `url(${img})` }}
          className='bg-no-repeat mt-[50px] opacity-5 w-full h-[400px]   '
        ></div> */}
        <img
          src={img}
          style={{ opacity: '10%' }}
          className='bg-no-repeat mt-[45px]    max-h-[400px]  '
        />
        <img
          src={Hail}
          alt='weather images'
          className=' mx-auto 
          -mt-[260px]  
          max-w-[180px]  '
        />
        <div className='grid place-content-center  '>
          <h1 className='text-[144px] text-[#E7E7EB]   font-meduim flex justify-center items-end'>
            15
            <span className='material-icons text-gray-400 text-[20px] mb-[100px]  font-bold '>
              panorama_fish_eye
            </span>
            <p className='text-[80px] text-gray-400   mb-6 '>C</p>
          </h1>
        </div>
        <h4 className='  text-[#A09FB1] text-[36px] font-normal text-center  '>
          Shower
        </h4>
        <p className='text-[#A09FB1] text-[18px] font-normal text-center my-5 mt-10'>
          Today . Fri,5 Jun
        </p>
        <p className='text-[#A09FB1] text-[18px] font-normal  my-5 flex justify-center items-end '>
          <span className='material-icons  '>location_on</span>
          Helsinki
        </p>
      </div>
    </>
  )
}

export default Sidebar
