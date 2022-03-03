import React from 'react'
// images
import clear from '../images/Clear.png'
import Hail from '../images/Hail.png'
import HeavyCloud from '../images/HeavyCloud.png'
import HeavyRain from '../images/HeavyRain.png'
import LightCloud from '../images/LightCloud.png'
import LightRain from '../images/LightRain.png'
import Shower from '../images/Shower.png'
import Sleet from '../images/Sleet.png'
import Snow from '../images/Snow.png'
import Thunderstorm from '../images/Thunderstorm.png'

import Temp from './tem'
import WeatherBox from './weather-box'

const MainPage = () => {
  return (
    <div className=' ml-[50%] absolute '>
      <div className='absolute ml-[20%] flex mt-8'>
        <button className=' bg-[#fff] outline-none grid  w-[50px] h-[50px] rounded-[50%] place-content-center  m-4'>
          <p className='  text-[#000]  flex justify-center items-end'>
            <span className='material-icons   text-[10px] mb-5 font-[800] '>
              panorama_fish_eye
            </span>
            <span className='  text-[24px]  font-semibold  '>C</span>
          </p>
        </button>
        <button className=' bg-[#585676] outline-none grid  w-[50px] h-[50px] rounded-[50%] place-content-center  m-4'>
          <p className='  text-[#fff]  flex justify-center items-end'>
            <span className='material-icons   text-[10px] mb-5 font-[800] '>
              panorama_fish_eye
            </span>
            <span className='  text-[24px]  font-semibold  '>F</span>
          </p>
        </button>
      </div>

      <div className='grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-5 mt-[140px]  '>
        <WeatherBox dates={'Tomorrow'} img={clear} min={'12'} max={'27'} />
        {/* dates, img, min, max */}
        <WeatherBox dates={'Mon, 8 jun'} img={Hail} min={'12'} max={'27'} />
        <WeatherBox
          dates={'Mon, 8 jun'}
          img={HeavyCloud}
          min={'12'}
          max={'27'}
        />
        <WeatherBox
          dates={'Mon, 8 jun'}
          img={HeavyRain}
          min={'12'}
          max={'27'}
        />
        <WeatherBox dates={'Mon, 8 jun'} img={Snow} min={'12'} max={'27'} />
      </div>
      <h1 className='text-left text-[24px] text-gray-100 my-[40px]'>
        Today’s Hightlights
      </h1>
      <div className='grid grid-cols-2 justify-around w-fit'>
        <div className='  bg-[#1E213A] w-[328px] h-[300px] m-2  px-4 py-8 '>
          <p className='text-center text-[24px]'>Wind status</p>
          <h1 className='text-[64px]  flex justify-center items-center my-4'>
            7<span className='text-[36px]'> mph</span>
          </h1>
          <p className='  text-[30px] text-center'>
            <span class='material-icons p-2 bg-gray-500 origin-center rotate-[-150deg]  text-[24px]   rounded-[50%]'>
              navigation
            </span>
            {'   '}
            WSW
          </p>
        </div>

        <div className='  bg-[#1E213A] w-[328px] h-[300px] m-2  px-4 py-8 '>
          <p className='text-center text-[24px]'>Wind status</p>
          <h1 className='text-[100px]  flex justify-center items-center'>
            7<span className='text-[36px]'> mph</span>
          </h1>
          <p className='flex justify-between w-full font-semibold text-[20px] text-gray-400'>
            <span className=''>0</span>
            <span className=''>50</span>
            <span className=''>100</span>
          </p>
          <input
            type='range'
            name='range'
            min='0'
            max='100'
            value='80'
            className='   w-full  bg-yellow-500 rounded-md '
          />
          <p className='text-right text-gray-400 font-semibold text-[24px]'>
            %
          </p>
        </div>

        <div className='  bg-[#1E213A] w-[328px] h-[300px] m-2  px-4 py-8 '>
          <p className='text-center text-[36px]'>Visibility</p>
          <h1 className='text-[100px]  flex justify-center items-center'>
            6,4<span className='text-[36px]'> miles</span>
          </h1>
        </div>

        <div className='  bg-[#1E213A] w-[328px] h-[300px] m-2  px-4 py-8 '>
          <p className='text-center text-[36px]'>Air Pressure</p>
          <h1 className='text-[100px]  flex justify-center items-center'>
            998<span className='text-[36px]'> mb</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default MainPage
