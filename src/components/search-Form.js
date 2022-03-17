import React from 'react'
import { useAppContext } from './context'

const SearchForm = () => {
  const { searchCity, weatherData, setSearchCity, weatherByCityName } =
    useAppContext()
  const submithandler = (e) => {
    e.preventDefault()
    if (searchCity === '') {
      console.log('input is empty')
    } else {
      setSearchCity(searchCity)
      weatherByCityName()
      console.log(weatherData)
      console.log(searchCity)
    }
  }
  return (
    <form
      onSubmit={submithandler}
      className='  m-4 flex items-center justify-center rounded-md'
    >
      <div className='flex flex-col bg-transparent'>
        <label htmlFor='query' className='text-gray-50 text-[14px]  my-2 mt-4'>
          Enter city name
        </label>
        <input
          type='text'
          name='query'
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder='Search for places'
          className='  py-2 px-2 border-x-0 text-main-color font-medium text-[16px]  bg-gray-50   outline-none   rounded-l'
        />
      </div>

      <button className=' bg-main-color-2   rounded-r pt-1 mt-[44px] '>
        <span className='material-icons font-normal text-main-color text-[30px]  '>
          search
        </span>
      </button>
    </form>
  )
}

export default SearchForm
