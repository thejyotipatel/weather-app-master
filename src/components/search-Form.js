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
    <form className='' onSubmit={submithandler}>
      <input
        type='text'
        name='query'
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        placeholder='Search for places'
        className=' m-4 py-2 px-2 border-x-0 text-gray-50 font-medium text-[16px] bg-[#6E707A]    outline-none rounded-sm'
      />
    </form>
  )
}

export default SearchForm
