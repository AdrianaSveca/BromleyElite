
import "./flooring.css";

function Gallery() {
  return (
    <>
      <div className="flooring" id="Flooring">
        <p className="flooringHeading">Our Flooring Range</p>
        <h1 className="flooringSubHeading">Flooring for Every Home</h1>

        <div className="galleryImages">
          <img alt="Interior" />
          <img alt="Breakfast" />
          <img alt="Coffee" />
          <img alt="Wrap" />
        </div>
      </div>
    </>
  );
}

export default Gallery;