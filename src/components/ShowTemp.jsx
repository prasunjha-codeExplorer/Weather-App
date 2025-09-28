const ShowTemp = ({weather}) => {
    return (
        <h1 className='temp'>{weather.temp} &deg;C</h1>
    )
}

export default ShowTemp;