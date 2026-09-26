import '../styling/footer.css';
import logo from '../assets/BromleyElite.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerColumns">

        <div className="footerLogo">
          <div className="footerBrand">
            <img src={logo} alt="Bromley Elite logo" className="footerLogoImg" />
            <div>
              <h3 className="footerBrandTitle">Bromley Elite</h3>
              <h4 className="footerBrandSubtitle">Carpet & Flooring</h4>
            </div>
          </div>

          <p className="footerDescription">
            Family-run flooring specialists with over 45 years of experience. Supplying and
            fitting quality carpets and flooring across Bromley and the surrounding areas.
          </p>
          
          <a href="https://www.facebook.com/scott.bromley.7"> Follow us on Facebook</a>
        </div>

        <div className="footerQuickLinks">
          <h4 className="footerTitle">Quick Links</h4>
          <ul className="footerQuickLinksList">
            <li><a href="/#hero">Home</a></li>
            <li><a href="/#aboutUs">About</a></li>
            <li><a href="/#flooring">Flooring</a></li>
            <li><a href="/#reviews">Reviews</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footerContact">
          <h4 className="footerTitle">Contact</h4>
          <ul className="footerContactList">
            <li>
              <span>+447478312439</span>
            </li>
            <li>
              <span>Bromley & Surrounding Areas, London</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footerBottom">
        <p className="footerCopyright">
          &copy; {new Date().getFullYear()} Bromley Elite Carpet & Flooring. All Rights Reserved.
        </p>
        <p className="footerTagline">Family-Run &middot; Est. 45+ Years</p>
      </div>
    </footer>
  );
}

export default Footer;