


function ReviewsCard(props) {
  

    return (
        <div className="reviewCard">
            <h1 className="reviewStars">★★★★★</h1>
            <p className="reviewDescription">{props.review}</p>
            <h2 className="reviewer">{props.name}</h2>

        </div>
    );
}
export default ReviewsCard