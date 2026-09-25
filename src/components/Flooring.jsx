import '../styling/flooring.css';

import FlooringCard from '../components/props/FlooringCards.jsx'

import carpet from '../assets/flooringCards/Carpet.jpg'
import laminate from '../assets/flooringCards/Laminate.jpg'
import wooden from '../assets/flooringCards/Wooden.jpg'





function Flooring() {

    const flooringCards = [
      {image: carpet, title: "carpet", heading: "Carpet", description: "Soft, warm and available in hundreds of styles — from plush bedroom carpets to durable family-friendly options."},
      {image: laminate, title: "laminate", heading: "Laminate", description: "Waterproof, hardwearing and beautifully realistic. LVT is perfect for kitchens, bathrooms and busy living areas."},
      {image: wooden, title: "wooden", heading: "Wooden", description: "Practical, comfortable underfoot and available in sheet or tile format. An affordable solution for any room."},
    ]
  return (
    <div className = "flooring">
        <p className = "flooringHeading">Our flooring range</p>
        <h1 className = "flooringSubHeading">Flooring for every home</h1>
        <span className = "flooringLine"></span>
        <p className = "flooringDesc">We supply and fit a wide range of flooring types to suit every home, budget and lifestyle.</p>
        <div className = "flooringCardContainer">
            {flooringCards.map((card)=>(
                <FlooringCard image={card.image} heading={card.heading} description={card.description} />
            ))}

        </div>
    </div>
  );
}

export default Flooring;