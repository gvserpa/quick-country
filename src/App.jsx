import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import CountryPage from './pages/countryPage/CountryPage.jsx'
import Project from "./pages/project/Project.jsx";
import ApiPage from "./pages/api-page/ApiPage.jsx";
import AboutMe from "./pages/about/AboutMe.jsx";

function App() {

  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/api" element={<ApiPage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/country/:name" element={<CountryPage />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
