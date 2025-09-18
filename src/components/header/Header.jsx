import { memo } from 'react';
import fb from '../../assets/facebook-fill (1).png'
import insta from '../../assets/instagram-fill.png'
import link from '../../assets/linkedin-box-fill (2).png'
import git from '../../assets/github-fill (3).png'
import './index.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()

    const handleLogo = () => {
        navigate('/')
    }

  return (
    <div className="Header">
        <header>
            <div className='logo'>
                <h2 onClick={handleLogo}>QuickCountry</h2>
            </div>
            <div className='menu'>
                <ul>
                    <li><Link to='/project'>Project</Link></li>
                    <li><Link to='/api'>API</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
            <div className='social-media-icons'>
                <a href='https://www.linkedin.com/in/devgustavoserpa/' target='_blank'><img src={link} alt='social-media-icons'/></a>
                <a href='https://github.com/gvserpa' target='_blank' ><img src={git} alt='social-media-icons'/></a>
            </div>
        </header>
    </div>
  );
};

export default memo(Header);