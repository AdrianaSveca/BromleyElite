import "../styling/contactUs.css";

function ContactUs() {
  return (
    <>
      <div className="contactUs">
        <div className="contactUsTitle">
          <h5>GET IN TOUCH</h5>
          <h1>Contact Us</h1>
        </div>

        <div className="contactUsInformation">
          <div className="contactUsLinks">
            <h3>We'd Love to Hear From You</h3>

            <div className="contactUsLink"></div>
            <div className="contactUsLink">
              <h5>PHONE</h5>
              <a href="07478 312439">07478 312439</a>
            </div>

            <div className="contactUsLink">
              <h5>EMAIL</h5>
              <a href=""></a>
            </div>
            <div className="contactUsLink">
              <h5>FACEBOOK</h5>
              <a href="https://www.facebook.com/sbscarpetandflooring">
                Bromley Elite Carpet & Flooring
              </a>
            </div>
            <div className="contactUsLink">
              <h5>SERVICE AREA</h5>
              <p>
                Bromley, Beckenham, Orpington, Chislehurst, Sidcup, West Wickham
                & surrounding areas
              </p>
            </div>

            <div className="contactUsHours">
              <ul>
                <li>Monday – Friday: 8:00 AM – 5:00 PM</li>
                <li>Saturday: 9:00 AM – 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="contactUsForm">
            <form>
              <div className="formRow">
                <div className="formGroup">
                  <label>FULL NAME *</label>
                  <input type="text" placeholder="Your name" />
                </div>

                <div className="formGroup">
                  <label>PHONE NUMBER *</label>
                  <input type="tel" placeholder="Your phone number" />
                </div>
              </div>
              <label htmlFor="email">Email</label>

              <input type="email" id="email" name="email"></input>

              <label for="flooring">Type Of Flooring</label>
              <select name="flooring" id="flooring">
                <option value="selectFlooringType">
                  Select Flooring Type{" "}
                </option>
                <option value="carpet">Carpet </option>
                <option value="luxuryVinylTile">Luxury Vinyl Tile</option>
                <option value="laminateFlooring">Laminate Flooring</option>
                <option value="vinylFlooring">Vinyl Flooring</option>
                <option value="notSureYet">Not Sure Yet</option>
              </select>

              <label for="message">Message</label>

              <textarea id="message" name="message"></textarea>

              <button type="submit">Get a Free Quote</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
