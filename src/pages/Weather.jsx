import React, { useState } from 'react'
import axios from 'axios'
export default function Weather() {
	const [city, setcity] = useState()
	const [weatherData, setweatherData] = useState({})
	const handleWeather = async()=>{
		const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=77a044a0aa084e1d3685bf849986f208";
		const {data} = await axios.get(url)
		await setweatherData(data)
		console.log(weatherData);
	}
  return (
	<div className='container'>
		<div className="row">
			<div className="col-sm-8 offset-sm-2">
				<div className="card mt-5">
					<div className="card-header">Weather Information</div>
					<div className="card-body">
					<input type="text" onChange={e=> setcity(e.target.value)}  className="form-control" />
					<br />
					<button className="btn btn-success w-100" onClick={handleWeather}>Get Weather</button>
					</div>
				</div>
				<br />
			</div>
			<div className="row">
				<div className="col-sm-6 offset-sm-3">
					<div className="card ">
						<div className="card-header text-center">City : {weatherData.name}</div>
						{
							weatherData.weather.map(item => <div>
								<h5 className='text-center'>Weather : {item.main}</h5>
								<h5 className='text-center'>Description :  {item.description}</h5>
							</div>)
						}
					</div>
				</div>
			</div>
		</div>
		
	</div>
  )
}
