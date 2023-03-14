import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button.js';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

const showButton = () => {
        if(window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="nacbar-container">
            <Link to="/" className="navbar-logo">
                JumysTap 
                <i className ='fab.fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ?'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                        About us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/how-it-works' className='nav-links' onClick={closeMobileMenu}>
                        How it works
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/get-started' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Get Started
                    </Link>
                </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
