import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click,setClick] = useState(false); // click is the varaible, setClick is dsipatch controller, which are declared using setState() deconstruction.

    const handleclick = () => setClick(!click);
    const closeMobileMenu = () => {

    }
    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
                 <Link to="/" className="navbar-logo">
                     TRVL <i className="fab fa-typo3"></i>
                 </Link>
                 <div className="menu-icon" onClick={handleclick}>
                    <div className={ click ? 'fas fa-times': 'fas fa-bars'}/>
                 </div>
                 <ul className={click? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link 
                        to='/' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                        to='/about' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                        to='/services' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                        to='/products' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                        to='/sign-up' 
                        className='nav-links-mobile' 
                        onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                 </ul>
                 {button && <Button buttonStyle='btn--outline'>
                     SIGN UP
                 </Button> }
             </div>
         </nav>
        </>
    )
}

export default Navbar
