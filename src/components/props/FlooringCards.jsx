


function FlooringCard(props) {
  

    return (
        <div className="FlooringCard">
            <img src={props.image} alt = {props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}
export default FlooringCard