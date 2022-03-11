import img from '../images/Cloud-background.png'
import SearchForm from './search-Form'
import { useAppContext } from './context'
import Loading from './loading'
const Sidebar = () => {
  const { weatherData, setDate, loading, getCurrentLocation } = useAppContext()

  return (
    <>
      <div
        // 2xl:block hidden
        className={`  md:max-w-[350px] w-fit       bg-main-color max-w-full `}
      >
        <div className='m-2  mt-4 flex justify-between items-center  '>
          <SearchForm />

          <button
            className=' bg-[#6E707A] outline-none grid  w-[40px] h-[40px] rounded-[50%] place-content-center  '
            onClick={getCurrentLocation}
          >
            <span className='material-icons text-gray-100 text-[30px] '>
              gps_fixed
            </span>
          </button>
        </div>

        <img
          src={img}
          style={{ opacity: '10%' }}
          className='bg-no-repeat mt-[15px]    max-h-[400px]  '
        />
        {weatherData.consolidated_weather !== undefined && (
          <>
            <img
              src={`https://www.metaweather.com/static/img/weather/png/${weatherData.consolidated_weather[0].weather_state_abbr}.png`}
              // src={Hail}
              alt='weather images'
              className=' mx-auto -mt-[180px] md:-mt-[130px] w-[100px]  '
            />
            <div className='grid place-content-center  '>
              <h1 className='text-[120px] text-[#E7E7EB] mt-4  font-meduim flex justify-center items-end'>
                {Math.floor(weatherData.consolidated_weather[0].max_temp)}
                {/* 15 */}
                <span className='material-icons text-gray-400 text-[15px] mb-[80px]  font-bold '>
                  panorama_fish_eye
                </span>
                <p className='text-[60px] text-gray-400   mb-6 '>C</p>
              </h1>
            </div>
            <h4 className='  text-[#A09FB1] text-[36px] font-normal text-center capitalize'>
              {weatherData.consolidated_weather[0].weather_state_name}
              {/* sunny */}
            </h4>
            <p className='text-[#A09FB1] text-[18px] font-normal text-center my-5 mt-[10px] capitalize'>
              Today .{' '}
              {setDate(
                weatherData.consolidated_weather[0].applicable_date,
                new Date().getDay()
              )}
              {/* Today . Fri, 5 Jun */}
            </p>
            <p className='text-[#A09FB1] text-[18px] font-normal  my-5 flex justify-center items-end '>
              <span className='material-icons  '>location_on</span>
              {/* Helsinki */}
              {weatherData.title}
            </p>
          </>
        )}
      </div>
    </>
  )
}

export default Sidebar
