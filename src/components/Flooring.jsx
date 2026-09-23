import '../styling/flooring.css';

import FlooringCard from '../components/props/FlooringCards.jsx'

import carpet from '../assets/flooringCards/Carpet.jpg'
import laminate from '../assets/flooringCards/Laminate.jpg'
import wooden from '../assets/flooringCards/Wooden.jpg'





function Flooring() {

    const flooringCards = [
      {image: carpet, heading: "Carpet", description: "xyz"},
      {image: laminate, heading: "Carpet", description: "xyz"},
      {image: wooden, heading: "Carpet", description: "xyz"},
    ]
  return (
    <div className = "flooring">
        <p className = "flooringHeading">Our flooring range</p>
        <h1 className = "flooringSubHeading">Flooring for every home</h1>
        <span className = "flooringLine"></span>
        <p className = "flooringDesc">We supply and fit a wide range of flooring types to suit every home, budget and lifestyle.</p>
        <div class = "flooringCards">
            {flooringCards.map((card)=>(
                <FlooringCard image={card.image} heading={card.heading} description={card.description} />
            ))}
        </div>
    </div>
  );
}

export default Flooring;