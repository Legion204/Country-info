import './Country.css'
const Country = ({country}) => {
    const {name,flags,area,population,capital}=country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Name: {name?.common}</h3>
            <h4>Official name: {name.official}</h4>
            <h5>Capital: {capital}</h5>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <button>visited</button>
        </div>
    );
};

export default Country;