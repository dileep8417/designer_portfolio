import { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [showNavMenu, setShowNavMenu] = useState(false);

    const menuItems = ['Home', 'Work', 'About', 'Contact'];
    return (
        <nav>
            <GiHamburgerMenu className="nav_btn" onClick={() => setShowNavMenu(prevState => !prevState)} />
            <div className={`nav_menu ${showNavMenu ? 'show' : ''}`}>
                {menuItems.map(menu => {
                    return (
                        <Link key={menu} className='nav_item' activeClass="active" to={`${menu.toLowerCase()}`} spy={true} smooth={true} offset={-100} duration={1000} onSetActive={() => setShowNavMenu(false)}>
                            {menu}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

export default Navbar;