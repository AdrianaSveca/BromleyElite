import '../styling/whyChooseUs.css'
import chat from '../assets/chat.png'
import clock from '../assets/clock.png'
import group from '../assets/group.png'
import star from '../assets/star.png'
import wrench from '../assets/wrench.png'

function WhyChooseUs() {
  return (
    <>
      <div className="whyChooseUs">
        <div className="chooseUsTitle">
          <h5>WHY CHOOSE US</h5>
          <h1>The Bromley Elite Difference</h1>
        </div>
        <div className="whyChooseCards">

          <div className="whyChooseCard">
            <div className="cardIcon">
              <img src={clock} alt="Clock icon" />
            </div>

            <h3>Decades of Experience</h3>

            <p>
              Over 45 years serving homeowners across Bromley and the surrounding
              areas. Our expertise is unmatched in the local area.
            </p>
          </div>


          <div className="whyChooseCard">
            <div className="cardIcon">
              <img src={wrench} alt="Wrench icon" />
            </div>

            <h3>Professional Fitting</h3>

            <p>
              Our skilled fitters deliver a high quality finish on every project,
              treating your home with care and respect throughout.
            </p>
          </div>


          <div className="whyChooseCard">
            <div className="cardIcon">
              <img src={star} alt="Clock icon" />
            </div>

            <h3>Quality Flooring</h3>

            <p>
              We work with trusted suppliers to offer a wide range of quality
              flooring products to suit every taste and budget.
            </p>
          </div>


          <div className="whyChooseCard">
            <div className="cardIcon">
              <img src={group} alt="Clock icon" />
            </div>

            <h3>Personal, Friendly Service</h3>

            <p>
              As a family business, we give every customer the individual attention
              and honest advice they deserve.
            </p>
          </div>


          <div className="whyChooseCard">
            <div className="cardIcon">
              <img src={chat} alt="Clock icon" />
            </div>

            <h3>Free Quotations</h3>

            <p>
              We offer free, no-obligation quotes. No pressure, no hidden costs,
              just straightforward, fair pricing.
            </p>
          </div>

        </div>




      </div>



    </>
  )

}
export default WhyChooseUs;