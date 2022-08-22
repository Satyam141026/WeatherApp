
import React, { useEffect, useState } from 'react'

const Weather = () => {
    const [data,setData]=useState(null)
    const [search,setSearch]=useState('Delhi')
    let access_key='0923c0a8d3db5f74b08e841da83d1ab1';


    useEffect(()=>{
      const getWeatherData=()=>{
        //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
       // fetch(`http://api.weatherstack.com/current?access_key=${access_key}&query=${search}`)
       //Api calling with fetch Api
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${access_key}&units=metric`)
        .then(response => response.json())
        .then((json)=>{
            setData(json.main)
          //  console.log(json)
        })
        .catch((error)=>{
            console.log(error,'the error is ')
        })
    }
        getWeatherData();

    },[search])
  return (
            <div className='sbackground p-5 text-white'>
                   <input className="sinput me-2" value={search} type="search" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Type City Name" aria-label="Search" />
                   {<div className='text-center fs-1 p-3 m-5'>Location Name:       {search}</div>}
                    { !data ? (<h1>DATA NOT FOUND </h1> ): (
                     <>
                    <div className="container text-center">
                        <div className="row row-cols-2 fs-1">
                          <div className="col">Temp :{data.temp} °C  <i className="fa-solid fa-sun"></i></div>
                          <div className="col">Maximum Temp :{data.temp_max} °C  <i className="fa-solid fa-temperature-arrow-up"></i></div>
                          <div className="col">Minimum Temp :{data.temp_min} °C  <i className="fa-solid fa-temperature-arrow-down"></i></div>
                          <div className="col">Pressure :{data.pressure}</div>
                          <div className="col">Humidity :{data.humidity}<i className="fa-thin fa-droplet-degree"></i></div>
                      
                        </div>
                    </div>
                    </>
                   )
                    }
           </div>
  )
}

export default Weather
