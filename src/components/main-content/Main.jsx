import { memo } from "react";
import "./index.css";
import flag from '../../assets/US-flag.png'

const Main = ({ countryData, imgUnsplash, exchangeRate, currencyCode }) => {
  return (
    <div className="CountryPage">
      <div className="main-img">
        {imgUnsplash && (
          <img src={imgUnsplash} alt={countryData?.name.common} />
        )}
      </div>
      <div className="main">
        <div className="main-card">
          <div className="main-country">
            <h1>{countryData && countryData.name.official}</h1>
            {countryData && <img src={countryData.flags.png} />}
          </div>

          <h2>Capital: {countryData ? countryData.capital : "Loading..."}</h2>

          {countryData && <p><strong>Continent:</strong> {countryData.continents[0]}</p>}
          {countryData && <p><strong>Population:</strong> {countryData.population}</p>}
          {countryData && <p><strong>Capital:</strong> {countryData.capital}</p>}
        </div>
        <div className="main-card exchange">
          <div className="main-country">
            <div className="us-flag">
            <img src={flag} />
            </div>
            {countryData && (
              <h2>
                {exchangeRate
                  ? `1 USD = ${exchangeRate} ${currencyCode}`
                  : "Loading exchange rate..."}
              </h2>
            )}
            <h1> {countryData && <img src={countryData.flags.png} />}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Main);
