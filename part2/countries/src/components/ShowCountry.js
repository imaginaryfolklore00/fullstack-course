import Language from './Language'
import Weather from './Weather'

const ShowCountry = ({ country }) => 
     (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language => <Language key={language.iso639_2} language={language} />)}
            </ul>
            <img src={country.flag} alt="Country flag" />
            <Weather capital={country.capital} />
        </div>
    )

export default ShowCountry