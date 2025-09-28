import searchIcon from '../assets/search.png';
function SearchCityTemp({city,search}) {
    return (
        <div className='search-bar'>
            <input type="text" ref={city} placeholder='search city...'
            />
            <img src={searchIcon} alt=''
                onClick={() => search(city.current.value)}
            />
        </div>
    )
}

export default SearchCityTemp;