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
              <a href=""></a>
            </div>

            <div className="contactUsLink">
              <h5>EMAIL</h5>
              <a href=""></a>
            </div>
            <div className="contactUsLink">
              <h5>FACEBOOK</h5>
              <a href=""></a>
            </div>
            <div className="contactUsLink">
              <h5>SERVICE AREA</h5>
              <p>
                Bromley, Beckenham, Orpington, Chislehurst, Sidcup, West Wickham
                & surrounding areas
              </p>
            </div>

            <div className="contactUsHours">
              <ul></ul>
            </div>
          </div>
          <div className="contactUsForm">
            <form>
              <label htmlFor="name">Full Name</label>
              <br></br>
              <input type="text" id="name" name="name"></input>
              <br></br>
              <label htmlFor="phoneNumber">Phone Number</label>
              <br></br>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
              ></input>
              <br></br>

              <label htmlFor="email">Email</label>
              <br></br>
              <input type="email" id="email" name="email"></input>
              <br></br>

              <label for="flooring">Type Of Flooring</label><br></br>
              <select name="flooring" id="flooring">
                <option value="selectFlooringType">Select Flooring Type </option>
                <option value="carpet">Carpet </option>
                <option value="luxuryVinylTile">Luxury Vinyl Tile</option>
                <option value="laminateFlooring">Laminate Flooring</option>
                <option value="vinylFlooring">Vinyl Flooring</option>
                <option value="notSureYet">Not Sure Yet</option>
              </select><br></br>

              <label for="message">Message</label>
              <br></br>
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
