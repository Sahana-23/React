import {
    WiThunderstorm,
    WiStormShowers,
    WiRain,
    WiSnow,
    WiDaySunny,
    WiCloudy,
    WiDayFog,
    WiSunrise,
    WiSunset,
    WiThermometerExterior,
    WiThermometer,
    WiCloudyGusts,
    WiHumidity
} from 'weather-icons-react'

const WeatherIcons = ({ size, type }) => {
    return (<>

        {type === 'Sunrise' ? <WiSunrise size={size} />
            : (type === 'Sunset') ? <WiSunset size={size} />
                : (type === 'MinTemp') ? <WiThermometerExterior size={size} />
                    : (type === 'MaxTemp') ? <WiThermometer size={size} />
                        : (type === 'Wind') ? <WiCloudyGusts size={size} />
                            : (type === 'Humidity') ? <WiHumidity size={size} />
                                : type === 'Thunderstorm' ? <WiThunderstorm size={size} />
                                    : (type === 'Drizzle') ? <WiStormShowers size={size} />
                                        : (type === 'Rain') ? <WiRain size={size} />
                                            : (type === 'Snow') ? <WiSnow size={size} />
                                                : (type === 'Clear') ? <WiDaySunny size={size} />
                                                    : (type === 'Clouds') ? <WiCloudy size={size} />
                                                        : <WiDayFog size={size} />
        }
    </>
    )
}

export default WeatherIcons