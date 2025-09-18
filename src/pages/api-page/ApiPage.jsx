import { memo } from 'react';
import Header from '../../components/header/Header';
import './index.css';

const ApiPage = () => {
  return (
    <div className="ApiPage">
      <Header />

      <section className="api-intro">
        <h1>APIs Overview</h1>
        <p>
          This page explains how each of the three APIs in the Country Info Finder project works, 
          and how they interact to provide a seamless and dynamic experience for users searching for countries.
        </p>
      </section>

      <section className="api-detail">
        <h2>1. Countries API</h2>
        <p>
          The Countries API provides basic information about countries, such as:
        </p>
        <ul>
          <li>Capital city</li>
          <li>Population</li>
          <li>Continent</li>
          <li>Currency</li>
          <li>National flag</li>
        </ul>
        <p>
          The data is fetched dynamically based on the user’s search input. 
          Each request returns structured information which is then passed to the React components via <code>props</code>.
        </p>
      </section>

      <section className="api-detail">
        <h2>2. Exchange Rate API</h2>
        <p>
          The Exchange Rate API provides real-time currency conversion from the country's currency to USD. 
          It is integrated dynamically so that when a country is selected, the API is called with the correct currency code. 
        </p>
        <ul>
          <li>The API returns the exchange rate in JSON format.</li>
          <li>We store the rate in the component state to display it on the page.</li>
          <li>Requests are made dynamically according to the selected country.</li>
        </ul>
      </section>

      <section className="api-detail">
        <h2>3. Unsplash API</h2>
        <p>
          The Unsplash API provides a high-quality image for the selected country. 
          Each search triggers a request with the country name as a query.
        </p>
        <ul>
          <li>We fetch one image per country to display on the page.</li>
          <li>The image enhances the visual experience and makes the app more engaging.</li>
          <li>Images are passed as <code>props</code> to the main component for rendering.</li>
        </ul>
      </section>

      <section className="api-conclusion">
        <h2>Integration and Data Flow</h2>
        <p>
          All three APIs are organized in the <code>services</code> folder, keeping the code modular and maintainable. 
          The application combines these APIs dynamically, using React state and <code>props</code> to display 
          synchronized and real-time information for each searched country.
        </p>
      </section>
    </div>
  );
};

export default memo(ApiPage);
