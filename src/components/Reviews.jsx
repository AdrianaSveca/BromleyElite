import '../styling/reviews.css';

import ReviewCard from '../components/props/ReviewsCard.jsx'


function Flooring() {

    const reviewCards = [
      {name: "Molly Perry",  review: "Had laminate flooring fitted downstairs today, good quality flooring & amazing service, cut down doors and skirting boards to make sure it fit precisely and we are really happy with the finished work. Will definitely use again, thank you!"},
      {name: "Alison Smith", review: "had my house fitted yesterday im so pleased its beautiful so quick from choosing to fitting its exactly what i wanted the fitters second to none worked on it all day untill the lot was finished 4 double beds hall stair and landing thank you so much for a perfect job beginning to end"},
      {name: "Stuart Jones", review: "Top job from these guys living room, stairs landing and 2 kids bedroom carpets and then flooring in the master bedroom, get price and even had to work around other work we were having done, highly recommend"}
    ]
  return (
    <div className = "reviews" id ="reviews">
        <p className = "reviewsHeading">Testimonials</p>
        <h1 className = "reviewsSubHeading">What Our Customers Say</h1>
        <span className = "reviewsLine"></span>
        <p className = "reviewsDesc">★ Based on customer reviews names and locations have been shortened for privacy.</p>
        <div className = "reviewsCardContainer">
             {reviewCards.map((card)=>(
                <ReviewCard name={card.name} review={card.review}/>
            ))}

        </div>
    </div>
  );
}

export default Flooring;