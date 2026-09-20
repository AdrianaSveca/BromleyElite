import '../styling/hero.css';
import heroLogo from '../assets/heroLogo.png';

function Hero() {
  return (
    <div className="hero">
      <div className= "heroBackground">

       
      </div>

      <div className="heroLogo">
        <img src={heroLogo} alt="Bromley Elite Logo" />
      </div>
      <div className = "heroInformation">
        <h1 className = "heroTitle">Quality Flooring. <span>Expertly Fitted.</span></h1>
        <p className = "heroParagraph">Family-run flooring specialists with over 45 years of expereince supplying and fitting quality flooring across Bromley and the surrounding areas.</p>
      </div>
      <div className="heroLinks">
        <a href="" className="primaryButton">View Our Flooring</a>
        <a href="" className="secondaryButton">Get a Free Quote</a>
      </div>
    </div>
  );
}

export default Hero;