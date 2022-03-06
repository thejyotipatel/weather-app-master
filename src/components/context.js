import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()
let lat, log, location
const BaseUrl = 'https://www.metaweather.com'
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
        lat = pos.coords.latitude
        log = pos.coords.longitude
        const curLoc = `${BaseUrl}/api/location/search/?lattlong=${lat},${log}`

        getWeatherLocationData(lat, log, curLoc)
      })
    } else {
      console.log('Geolocation is not suppoeted by this browser.')
    }
  }

  // fetch data from api
  const getWeatherLocationData = async (url) => {
    setLoading(true)
    const mainurl = url
    fetch(mainurl)
      .then(function (res) {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(res)
        }
      })
      .then(function (data) {
        location = data
        console.log(location[0].woeid)
        return fetch(`${BaseUrl}/api/location/${location[0].woeid}/`)
      })
      .then(function (res) {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(res)
        }
      })
      .then(function (wData) {
        setWearherData(wData)
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  // set Date, Day and Month
  const setDate = (dayspan, datespan) => {
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
    //  Today . {days[new Date().getDay()]}, {new Date().getDate()}{' '}
    //       {months[new Date().getMonth()]}
    const d = new Date()
    let day = days[d.getDay() + dayspan]
    let date = d.getDate() + datespan
    let month = months[d.getMonth()]

    let Times = `${day}, ${date} ${month}`

    return Times
  }

  //  se weather by city name
  const weatherByCityName = () => {
    const cityUrl = `/api/location/search/?query=${searchCity}`

    getWeatherLocationData(cityUrl)
  }

  // console.log(weatherData)
  // get weather data of current location at stating of app
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
        location,
        setWearherData,
        searchCity,
        setSearchCity,
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
