import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()
const BASE_URL = 'https://www.metaweather.com/api/location/search/?lattlong='

const AppProvider = ({ children }) => {
  const [weatherData, setWearherData] = useState([])
  const [sidebar, setSidebar] = useState(false)

  const openSidebar = () => {
    setSidebar(true)
  }
  const closeSidebar = () => {
    setSidebar(false)
  }
  // const url = `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&appid=${key}`
  const getWeatherData = async () => {
    let lati = ''
    let long = ''
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        lati = pos.coords.latitude
        long = pos.coords.longitude
      })
    } else {
      console.log('Geolocation is not suppoeted by this browser.')
    }
    const response = await fetch(`${BASE_URL}(${lati}),(${long})`)
    const data = await response.json()
    console.log(data)
    setWearherData(data)
  }
  // getWeatherData(BASE_URL)
  console.log(process.env.REACT_APP_KEY)
  useEffect(() => {
    getWeatherData()
  }, [])
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function (pos) {
  //     lat = 'lat=' + pos.coords.latitude
  //     lon = 'lon=' + pos.coords.longitude
  //     checkWeather(lat, lon)
  //   })
  // } else console.log('Geolocation is not suppoeted by this browser.')

  //   const getCurrentWeather = async(lat, lon, key) =>{
  // const url = `${BASE_URL}?${lat}&${lon}&appid${key}`
  // const res = await
  //   }
  return (
    <AppContext.Provider value={{ openSidebar, closeSidebar, getWeatherData }}>
      {children}
    </AppContext.Provider>
  )
}
export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
