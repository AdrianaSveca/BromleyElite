import './nav.css';
import logo from '../assets/BromleyElite.png';

function Nav() {
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
        <div className="navlinks">
          <ul>
            <li><a href="/#hero">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#menu">Flooring</a></li>
            <li><a href="/#menu">Our Work</a></li>
            <li><a href="/#menu">Reviews</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><button className="quote-btn">Get a free quote</button></li>
          </ul>
          
        </div>
      </nav>
    </div>
  );
}

export default Nav;