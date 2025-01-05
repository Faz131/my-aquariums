import React from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css';

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <>
    <header>
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
        &#9776;
        </div>
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/10gallon">10 Gallon Tanks</Link></li>
          <li><Link to="/20gallon">20 Gallon Tanks</Link></li>
          <li><Link to="/30gallon">30 Gallon Tanks</Link></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;