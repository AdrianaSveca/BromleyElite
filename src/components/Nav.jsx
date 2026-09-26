import { useState } from 'react';
import '../styling/nav.css';
import logo from '../assets/BromleyElite.png';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar">
      <nav>
        <div className="navlogo">
          <img src={logo} alt="Bromley Elite" />
          <div className="navlogo-text">
            <h1>Bromley Elite</h1>
            <h2>Carpet & Flooring</h2>
          </div>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="navlinks">
          <ul className={menuOpen ? 'open' : ''}>
            <li><a href="/#hero" onClick={closeMenu}>Home</a></li>
            <li><a href="/#aboutUs" onClick={closeMenu}>About</a></li>
            <li><a href="/#flooring" onClick={closeMenu}>Flooring</a></li>
            <li><a href="/#reviews" onClick={closeMenu}>Reviews</a></li>
            <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
            <li><button className="quote-btn" onClick={closeMenu}>Get a free quote</button></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;