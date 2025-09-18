import { memo } from 'react';
import Header from '../../components/header/Header';
import './index.css';

const Project = () => {
  return (
    <div className="project">
      <Header />

      <section className="project-intro">
        <h1>Country Info Finder Project</h1>
        <p>
          This project is a dynamic web application designed to demonstrate the integration 
          of multiple APIs in a single interface. The main idea was to create a site that 
          fetches information from three different APIs simultaneously, allowing users to 
          explore detailed data about any country.
        </p>
      </section>

      <section className="project-api">
        <h2>APIs Used</h2>
        <p>
          The project consumes three APIs that interact with each other to provide comprehensive 
          country information:
        </p>
        <ul>
          <li>
            <strong>Countries API:</strong> Provides basic information about each country, 
            such as capital, population, continent, currency, and flag.
          </li>
          <li>
            <strong>Exchange Rate API:</strong> Fetches the exchange rate of the country's 
            currency compared to the USD dynamically.
          </li>
          <li>
            <strong>Unsplash API:</strong> Returns a custom image for each searched country 
            to enhance the visual experience.
          </li>
        </ul>
        <p>
          All API calls are organized in the <code>services</code> folder, keeping the project 
          structure clean and maintainable.
        </p>
      </section>

      <section className="project-structure">
        <h2>Project Structure & Data Flow</h2>
        <p>
          Dynamic content for each page is stored in its respective root folder, while components 
          receive the content through <code>props</code>. This separation ensures that the 
          presentation layer is clean and components remain reusable and flexible.
        </p>
      </section>

      <section className="project-features">
        <h2>Features</h2>
        <ul>
          <li>Search any country and get detailed information.</li>
          <li>Display capital, population, continent, currency, and national flag.</li>
          <li>Show the currency's exchange rate against the USD.</li>
          <li>Fetch a personalized image of the country from Unsplash.</li>
          <li>Real-time dynamic interaction between multiple APIs.</li>
        </ul>
      </section>

    </div>
  );
};

export default memo(Project);
