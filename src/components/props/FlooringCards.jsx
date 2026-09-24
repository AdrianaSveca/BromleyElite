


function FlooringCard(props) {
  

    return (
        <div className="flooringCard">
            <img className="cardImage" src={props.image} alt = {props.title} />
            <h2 className="flooringCardTitle">{props.title}</h2>
            <p className="flooringCardDescription">{props.description}</p>
            <button className="flooringButton">Enqire →</button>
        </div>
    );
}
export default FlooringCard