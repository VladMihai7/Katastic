import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
       <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            KATASTIC
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/benefits'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Benefits
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/advantages'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Advantages
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
