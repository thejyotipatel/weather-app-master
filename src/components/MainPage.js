import React from 'react'
import WeatherBox from './weather-box'
import { useAppContext } from './context'
const IMG_URL = 'https://www.metaweather.com'
const MainPage = () => {
  const { weatherData, setDate } = useAppContext()

  return (
    <div className='   mx-auto'>
      {/* <TempAndFen /> */}
      {weatherData.consolidated_weather !== undefined ? (
        <div className='md:flex flex flex-wrap   my-4 justify-center md:flex-wrap md:space-evenly  items-start mx-auto  md:items-center'>
          <WeatherBox
            dates={'Tomorrow'}
            img={`${IMG_URL}/static/img/weather/png/${weatherData.consolidated_weather[1].weather_state_abbr}.png`}
            min={Math.floor(weatherData.consolidated_weather[1].max_temp)}
            max={Math.floor(weatherData.consolidated_weather[1].min_temp)}
          />
          {/* dates, img, min, max */}
          <WeatherBox
            // 2022-03-08
            dates={setDate(weatherData.consolidated_weather[2].applicable_date)}
            img={`${IMG_URL}/static/img/weather/png/${weatherData.consolidated_weather[2].weather_state_abbr}.png`}
            min={Math.floor(weatherData.consolidated_weather[2].max_temp)}
            max={Math.floor(weatherData.consolidated_weather[2].min_temp)}
          />
          <WeatherBox
            dates={setDate(weatherData.consolidated_weather[3].applicable_date)}
            img={`${IMG_URL}/static/img/weather/png/${weatherData.consolidated_weather[3].weather_state_abbr}.png`}
            min={Math.floor(weatherData.consolidated_weather[3].max_temp)}
            max={Math.floor(weatherData.consolidated_weather[3].min_temp)}
          />
          <WeatherBox
            dates={setDate(weatherData.consolidated_weather[4].applicable_date)}
            img={`${IMG_URL}/static/img/weather/png/${weatherData.consolidated_weather[4].weather_state_abbr}.png`}
            min={Math.floor(weatherData.consolidated_weather[4].max_temp)}
            max={Math.floor(weatherData.consolidated_weather[4].min_temp)}
          />
          <WeatherBox
            dates={setDate(weatherData.consolidated_weather[5].applicable_date)}
            img={`${IMG_URL}/static/img/weather/png/${weatherData.consolidated_weather[5].weather_state_abbr}.png`}
            min={Math.floor(weatherData.consolidated_weather[5].max_temp)}
            max={Math.floor(weatherData.consolidated_weather[5].min_temp)}
          />
        </div>
      ) : (
        ''
      )}
      {/* hightlights */}
      <h1 className='text-left text-[24px] text-gray-50     ml-4 capitalize'>
        Today’s Hightlights
      </h1>
      {typeof weatherData.consolidated_weather !== 'undefined' ? (
        <div className='grid md:grid-cols-2 grid-cols-1   justify-between mx-auto  '>
          <div className='  bg-main-color max-w-full md:max-w-[500px]    m-4  px-2 py-2  h-[200px]  rounded-sm'>
            <p className='text-center text-[18px] font-medium'>Wind status</p>
            <h1 className='text-[64px]  flex justify-center items-center '>
              {/* 7 */}
              {Math.floor(weatherData.consolidated_weather[1].wind_speed)}
              <span className='text-[24px]  '> mph</span>
            </h1>
            <p className='  text-[24px] text-center'>
              <span className='material-icons p-2 bg-gray-500 origin-center rotate-[-150deg]  text-[20px]   rounded-[50%]'>
                navigation
              </span>
              {'   '}
              {weatherData.consolidated_weather[0].wind_direction_compass}
            </p>
          </div>

          <div className='  bg-main-color max-w-full md:max-w-[500px]  m-4  px-2 py-2   h-[200px]  rounded-sm'>
            <p className='text-center text-[18px] font-medium'>Humidity</p>
            <h1 className='text-[64px]  flex justify-center items-center'>
              {/* 84 */}
              {weatherData.consolidated_weather[0].humidity}
              <span className='text-[24px]'> %</span>
            </h1>
            <p className='flex justify-between w-full font-semibold text-[12px] text-gray-400'>
              <span className=''>0</span>
              <span className=''>50</span>
              <span className=''>100</span>
            </p>
            <input
              type='range'
              name='range'
              min='0'
              max='100'
              readOnly
              // value='80'
              value={weatherData.consolidated_weather[0].humidity}
              className='   w-full   rounded-md '
            />
            <p className='text-right text-gray-400 font-semibold text-[16px]  '>
              %
            </p>
          </div>

          <div className='  bg-main-color max-w-full md:max-w-[500px]   h-fit m-4  px-2 py-2   rounded-sm'>
            <p className='text-center text-[18px] font-medium'>Visibility</p>
            <h1 className='text-[64px]  flex justify-center items-center'>
              {/* 6,4 */}
              {Math.floor(weatherData.consolidated_weather[0].visibility)}
              <span className='text-[24px]'> miles</span>
            </h1>
          </div>

          <div className='  bg-main-color max-w-full md:max-w-[500px] h-fit m-4    py-2   rounded-sm'>
            <p className='text-center text-[18px] font-medium'>Air Pressure</p>
            <h1 className='text-[64px]  flex justify-center items-center'>
              {/* 998 */}
              {weatherData.consolidated_weather[0].air_pressure}
              <span className='text-[24px]'> mb</span>
            </h1>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default MainPage
