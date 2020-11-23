"use strict"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from 'react'

import CurrentWeather from "./Components/CurrentWeather";
import Forecast from "./Components/Forecast";
import ErrorMessage from "./Components/ErrorMessage"
import { Container, Row, Col, InputGroup, Button, FormControl } from 'react-bootstrap'


function App() {
  const [city, setCity] = useState('')
  const [currentWeather, setCurrentWeather] = useState({})
  const [weatherForecast, setWeatherForecast] = useState({})
  const [error, setError] = useState('')

  const handleSearch = async () => {
    try {
      const API_KEY = 'e63639211dad27f27ba02cf7a8a95066'

      let currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      let currentWeatherData = await currentWeatherResponse.json()

      if (currentWeatherResponse.status !== 200) {
        throw Error(currentWeatherData.message)
      }

      let weatherForecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentWeatherData.coord.lat}&lon=${currentWeatherData.coord.lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`)

      let weatherForecastData = await weatherForecastResponse.json()

      if (weatherForecastResponse.status !== 200) {
        throw Error(weatherForecastData.message)
      }

      setError('')
      setCurrentWeather(currentWeatherData)
      setWeatherForecast(weatherForecastData)


    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }


  return (
    <Container>
      {/* Header */}
      <Row>
        <Col>
          <h1 className='py-4 m-auto text-center'>WEATHER</h1>
        </Col>
      </Row>

      {/* Search Bar */}
      <Row>
        <Col>
          <Container className="search-container">
            <InputGroup className="mb-3">
              <FormControl
                className='py-2 rounded-pill mr-1 pr-5'
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <InputGroup.Append>
                <Button variant="light" className="rounded-pill border-0 ml-n5 search-icon" onClick={() => { handleSearch() }}><i className='fas fa-search'></i></Button>
              </InputGroup.Append>
            </InputGroup>
          </Container>
        </Col>
      </Row>
      {error && <ErrorMessage message={error} />}
      <CurrentWeather currentWeather={currentWeather} />

      <Forecast weatherForecast={weatherForecast} />

    </Container>
  );
}

export default App;
