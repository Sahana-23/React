import { Container } from 'react-bootstrap'

import ForecastCard from './ForecastCard'

const Forecast = ({ weatherForecast }) => {

    return (<>
        {
            Object.keys(weatherForecast).length > 0 && <>
                <h4 className='p-4 m-auto'>FORECAST</h4>
                <Container className='forecast-container text-center'>

                    {weatherForecast.daily.map((day) =>
                        <ForecastCard dayData={day} />
                    )}


                </Container>
            </>
        }
    </>
    )
}

export default Forecast