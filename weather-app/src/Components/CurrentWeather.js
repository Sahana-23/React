"use strict"

import { Row, Col, Container } from 'react-bootstrap'

import WeatherIcons from './WeatherIcons'

const CurrentWeather = ({ currentWeather }) => {
    const months = ['January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const getFormattedDate = (UnixTimestampDate) => {
        let date = new Date(UnixTimestampDate * 1000)
        let formattedDate = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getFullYear()}`
        return formattedDate
    }

    const getFormattedTime = (UnixTimestampTime) => {
        let time = new Date(UnixTimestampTime * 1000)
        let hours = time.getHours() > 9 ? time.getHours() : '0' + time.getHours()
        let minutes = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes()
        let formattedTime = `${hours} :  ${minutes} `
        return formattedTime
    }

    return (
        <>
            {Object.keys(currentWeather).length > 0 && <Container className='mt-4'>
                <Row className='flex-column mb-2'>
                    <h2>{currentWeather.name} , {currentWeather.sys.country}</h2>
                    <p>{getFormattedDate(currentWeather.dt)}</p>
                </Row>

                <Row>
                    <Col className='col-12 col-md-6'>
                        <Row className='py-5'>
                            <Col ><WeatherIcons size={160} type={currentWeather.weather[0].main} /></Col>
                            <Col>
                                <p className='temperature'>{currentWeather.main.temp}&#x2103;</p>
                                <p>{currentWeather.weather[0].description}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='col-12 col-md-6 weather-details text-center'>
                        <Row>
                            <Col className='p-3'>
                                <WeatherIcons size={50} type='Sunrise' />
                                <p className='m-0'>Sunrise</p>
                                <p>{getFormattedTime(currentWeather.sys.sunrise)}</p>
                            </Col>
                            <Col className='p-3'>
                                <WeatherIcons size={50} type='MinTemp' />
                                <p className='m-0'>Min Temp</p>
                                <p>{currentWeather.main.temp_min}&#x2103;</p>
                            </Col>
                            <Col className='p-3'>
                                <WeatherIcons size={50} type='Wind' />
                                <p className='m-0'>Wind</p>
                                <p>{currentWeather.wind.speed} m/s</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='p-3'>
                                <WeatherIcons size={50} type='Sunset' />
                                <p className='m-0'>Sunset</p>
                                <p>{getFormattedTime(currentWeather.sys.sunset)}</p>
                            </Col>
                            <Col className='p-3'>
                                <WeatherIcons size={50} type='MaxTemp' />
                                <p className='m-0'>Max Temp</p>
                                <p>{currentWeather.main.temp_max}&#x2103;</p>
                            </Col>
                            <Col className='p-3'>
                                <WeatherIcons size={50} type='Humidity' />
                                <p className='m-0'>Humidity</p>
                                <p>{currentWeather.main.humidity}%</p>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>}
        </>
    )
}

export default CurrentWeather