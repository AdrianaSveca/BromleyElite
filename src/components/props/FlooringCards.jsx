


function FlooringCard(props) {
  

    return (
        <div className="flooringCard">
             <div className="cardImageWrapper">
                <img className="cardImage" src={props.image} alt={props.title} />
            </div>
            <h2 className="flooringCardHeading">{props.heading}</h2>
            <p className="flooringCardDescription">{props.description}</p>
            <button className="flooringButton">Enqire →</button>
        </div>
    );
}
export default FlooringCard