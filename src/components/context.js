import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext()
const BaseUrl = `${
  process.env.REACT_APP_PROXY_URL || ''
}https://www.metaweather.com`
const AppProvider = ({ children }) => {
  const [weatherData, setWearherData] = useState([])
  const [sidebar, setSidebar] = useState(false)
  const [searchCity, setSearchCity] = useState('')
  const [loading, setLoading] = useState(true)

  const openSidebar = () => {
    setSidebar(true)
  }
  const closeSidebar = () => {
    setSidebar(false)
  }

  // get latittude and longitude
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude
        let log = pos.coords.longitude
        const curLoc = `/api/location/search/?lattlong=${lat},${log}`

        getweatherData(curLoc)
      })
    } else {
      return (
        <div className='mx-auto text-gray-50 flex justify-center mt-[10rem]'>
          <h1 className=''>Geolocation is not suppoeted by this browser.</h1>
        </div>
      )
    }
  }

  // get weather data
  const getweatherData = async (url) => {
    try {
      // git city id
      const response = await axios.get(BaseUrl + url)
      const location = await response.data[0].woeid
      if (location === '') {
        return
      }
      // git city weather data
      const weaterDataResponse = await axios.get(
        `${BaseUrl}/api/location/${location}/`
      )
      // console.log(weaterDataResponse.data)
      setWearherData(weaterDataResponse.data)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }
  const setDate = (data) => {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Ape',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nav',
      'Dec',
    ]

    data = data.replace('/', '-')
    data = data.replace('/', '-')
    let d = new Date(data)
    return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`
  }

  //  se weather by city name
  const weatherByCityName = () => {
    const cityUrl = `/api/location/search/?query=${searchCity}`
    getweatherData(cityUrl)
  }

  // get weather data of current location at stating of the app
  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        setDate,
        weatherData,
        setWearherData,
        searchCity,
        setSearchCity,
        getCurrentLocation,
        weatherByCityName,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
