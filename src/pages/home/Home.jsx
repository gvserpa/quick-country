import { memo, use } from 'react';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'


const Home = () => {
    
    const navigate = useNavigate()
    const [country, setCountry] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/country/${country}`) 
    }

  return (
    <div className='home'>
    <Header />
    <Search country={country} setCountry={setCountry} handleSubmit={handleSubmit} />
    </div>
  );
};

export default memo(Home);