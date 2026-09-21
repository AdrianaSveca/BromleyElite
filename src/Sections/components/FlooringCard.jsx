import  alcohol from './assets/Drinks.jpg'
import coffee from './assets/Drinks2.jpg'
import burger from './assets/Food4.jpg'
import pastries from './assets/Food5.jpg'



function MenuCard(props) {
    return (
        <div className="FlooringCard">
            <img src={props.image} alt = {props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}
export default MenuCard