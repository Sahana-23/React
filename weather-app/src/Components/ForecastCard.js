import WeatherIcons from './WeatherIcons'


const ForecastCard = ({ dayData }) => {
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

    const getDay = (UnixTimestampDate) => {
        let date = new Date(UnixTimestampDate * 1000)
        let dt = date.getDate()
        let ord = (dt % 10 === 1 && dt !== 11 ? 'st' : (dt % 10 === 2 && dt !== 12 ? 'nd' : (dt % 10 === 3 && dt !== 13 ? 'rd' : 'th')))
        let formattedDate = `${dt}${ord} ${months[date.getMonth()]} `
        return formattedDate
    }


    return (
        <div className='forecast-card'>
            <p>{getDay(dayData.dt)}</p>
            <WeatherIcons type={dayData.weather[0].main} size={40} />
            <p>{dayData.weather[0].description}</p>
        </div>
    )
}

export default ForecastCard