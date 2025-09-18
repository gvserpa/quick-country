import { memo } from 'react';
import Header from '../../components/header/Header';
import './index.css';

const AboutMe = () => {
  return (
    <div className="project">
      <Header />

      <section className="about-intro">
        <h1>About Me</h1>
        <p>
          Hello! I'm Gustavo Vieira Serpa, a motivated web developer based in Australia. 
          I am passionate about building applications, learning new technologies, and 
          delivering high-quality code.
        </p>
      </section>

      <section className="about-education">
        <h2>Education & Certifications</h2>
        <ul>
          <li>
            <strong>Diploma in Information Technology</strong> – Laneway Education, Australia
          </li>
          <li>
            <strong>High Achiever Certificate</strong> – Laneway Education, Australia
          </li>
          <li>
            <strong>AWS Certified Cloud Practitioner</strong>
          </li>
        </ul>
      </section>

      <section className="about-skills">
        <h2>Technologies & Skills</h2>
        <p>Here is a summary of the technologies I have been working with and my level of expertise:</p>
        <ul>
          <li><strong>HTML / CSS:</strong> Advanced – Able to build responsive and modern layouts</li>
          <li><strong>JavaScript:</strong> Advanced – Solid understanding including DOM, ES6+, and async operations</li>
          <li><strong>React:</strong> Intermediate – Can build components, manage state, hooks, and API integration</li>
          <li><strong>Node.js & Express:</strong> Intermediate – Comfortable with building REST APIs and server-side logic</li>
          <li><strong>Databases (SQL / NoSQL):</strong> Intermediate – Can design and query databases, basic CRUD operations</li>
          <li><strong>AWS Cloud:</strong> Beginner to Intermediate – Familiar with hosting, Lambda, SES, and S3</li>
          <li><strong>Git & GitHub:</strong> Intermediate – Version control, project organization, deployment workflows</li>
        </ul>
      </section>

      <section className="about-links">
        <h2>Connect with Me</h2>
        <p>
          You can find my projects and connect with me online:
        </p>
        <ul>
          <li><a href="https://github.com/gvserpa" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/devgustavoserpa/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </section>

    </div>
  );
};

export default memo(AboutMe);
