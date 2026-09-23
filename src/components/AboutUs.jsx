import '../styling/aboutUs.css'
import image from '../assets/ScottReplacementImage.png'


function AboutUs() {
  return (
    <>
      <div className="aboutUs">
        <div className="aboutUsInformation">
          <div className="titleInformation">
            <h4 className="aboutUsH4">ABOUT US</h4>
            <h1 className="aboutUsH1">Over 45 Years of Flooring Experience</h1>
          </div>
          <div className="aboutUsInformationParagraph">
            <p>Bromley Elite Carpet & Flooring is a family-run business with over four and a half decades of experience supplying and fitting quality flooring throughout Bromley and the surrounding areas.</p>

            <p>We take pride in delivering the highest standard of workmanship on every job, whether it's a single room carpet or a full renovation. Our friendly, experienced fitters take care to protect your home and leave every installation looking immaculate.</p>

            <p>As a family business, we believe in honest advice, fair prices and a personal service that the big retailers simply can't match. We're here to help you find exactly the right flooring for your home.</p>
          </div>
          <ul className="aboutUsList">
            <li>Free, no-obligation quotations</li>
            <li>Experienced, reliable fitting team</li>
            <li>Wide range of quality flooring brands</li>
            <li>Friendly, honest advice for your home</li>
          </ul>
          <div className="aboutUsButton">
            <a href="" className="aboutUsLink">Get a Free Quote</a>
          </div>



        </div>

        <div className="aboutUsRight">

          <div className="aboutUsImage">
            <img src={image} alt="Image of a working man" />
          </div>

          <div className="aboutUsStats">
            <div className="stat">
              <h3>45<sup>+</sup></h3>
              <p>YEARS<br />EXPERIENCE</p>
            </div>

            <div className="stat">
              <h3>Family</h3>
              <p>RUN<br />BUSINESS</p>
            </div>

            <div className="stat">
              <h3>Expert</h3>
              <p>FITTING<br />TEAM</p>
            </div>

            <div className="stat">
              <h3>Local</h3>
              <p>FRIENDLY<br />SERVICE</p>
            </div>
          </div>

        </div>


      </div>

    </>
  )
}
export default AboutUs;