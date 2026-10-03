import '../styling/calculator.css';

function calculatePrice(e) {
  e.preventDefault();
  let width = Number(document.getElementById('width').value);
  let length = Number(document.getElementById('length').value);
  let flooringPrice = Number(document.getElementById('flooringPrice').value);
  alert(width * length * flooringPrice);
}

function closeModal() {
  document.getElementById('modalContainer').classList.remove('show');
}

function Calculator() {
  return (
    <div className="modalContainer" id="modalContainer">
      <form onSubmit={calculatePrice}>
        <label>Width</label>
        <input type="text" id="width" />
        <label>Length</label>
        <input type="text" id="length" />
        <label>Flooring price</label>
        <input type="text" id="flooringPrice" />
        <button type="submit">Calculate Price</button>
        <button type="button" onClick={closeModal}>Close</button>
      </form>
    </div>
  );
}
export default Calculator;