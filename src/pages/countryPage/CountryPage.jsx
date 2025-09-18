import { memo } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import countriesAPI from "../../services/countries-api";
import Header from "../../components/header/Header";
import unsplashAPI from "../../services/unsplash-api";
import Main from '../../components/main-content/Main.jsx';
import exchangeAPI from "../../services/exchange-api.js";
import './index.css';

const CountryPage = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [imgUnsplash, setImgUnsplash] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [currencyCode, setCurrencyCode] = useState('');

  // Busca dados do país
  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await countriesAPI.get(`/name/${name}`);
        setCountryData(response.data[0]);
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    }
    fetchCountry();
  }, [name]);

  // Busca imagem do país no Unsplash
  useEffect(() => {
    async function fetchUnsplash() {
      if (!name) return;
      try {
        const response = await unsplashAPI.get("/search/photos", {
          params: { query: name, per_page: 1 }
        });
        if (response.data.results.length > 0) {
          setImgUnsplash(response.data.results[0].urls.full);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }
    fetchUnsplash();
  }, [name]);

  // Busca taxa de câmbio
useEffect(() => {
  if (!countryData?.currencies) return;

  const fetchExchange = async () => {
    try {
      const currencies = countryData.currencies;
      const codes = Object.keys(currencies);
      if (!codes || codes.length === 0) return;

      const code = codes[0];
      setCurrencyCode(code); // ✅ agora será definido corretamente

      const response = await exchangeAPI.get('/convert', {
        params: { from: 'USD', to: code, amount: 1 }
      });

      if (response.data?.result) {
        setExchangeRate(response.data.result.toFixed(2));
      } else {
        setExchangeRate(null);
      }
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      setExchangeRate(null);
    }
  };

  fetchExchange();
}, [countryData?.currencies]);


  return (
    <div className="CountryPage">
      <Header />
      <Main countryData={countryData} imgUnsplash={imgUnsplash} exchangeRate={exchangeRate} currencyCode={currencyCode} />
    </div>
  );
};

export default memo(CountryPage);
