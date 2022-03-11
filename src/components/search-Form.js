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
      className='bg-gray-50 m-4 flex items-center justify-center rounded-md'
    >
      <input
        type='text'
        name='query'
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        placeholder='Search for places'
        className='  py-2 px-2 border-x-0 text-main-color font-medium text-[16px]  bg-gray-50   outline-none rounded-sm'
      />
      <button className=' bg-gray-50 pt-1 '>
        <span className='material-icons font-normal text-main-color/40 text-[30px] '>
          search
        </span>
      </button>
    </form>
  )
}

export default SearchForm
