import { useState } from 'react';

import '../styling/calculator.css';



function closeModal() {
  document.getElementById('modalContainer').classList.remove('show');
}

function Calculator() {
    const [total, setTotal] = useState(null);

    function calculatePrice(e) {
      e.preventDefault();
      let width = Number(document.getElementById('width').value);
      let length = Number(document.getElementById('length').value);
      let flooringPrice = Number(document.getElementById('flooringPrice').value);
      setTotal(width * length * flooringPrice);
  }

    
    return (
    <div className="modalContainer" id="modalContainer">
      <form className="calculatorForm" onSubmit={calculatePrice}>
        <h2 className="calculatorTitle">Flooring Calculator</h2>
        <p className="calculatorSubtitle">Estimate Cost</p>
 
        <label htmlFor="width">Width (m)</label>
        <input type="number" id="width" min="0" step="any" placeholder="e.g 1" required />
 
        <label htmlFor="length">Length (m)</label>
        <input type="number" id="length" min="0" step="any" placeholder="e.g 1" required />
 
        <label htmlFor="flooringPrice">Flooring price (per m^2)</label>
        <input type="number" id="flooringPrice" min="0" step="any" placeholder="e.g 10" required />
 
        {total !== null && (
          <div className="calculatorResult">
            Estimated total: <strong>£{total.toFixed(2)}</strong>
          </div>
        )}
 
        <div className="calculatorButtons">
          <button type="submit" className="calculatorSubmit">Calculate Price</button>
          <button type="button" className="calculatorClose" onClick={closeModal}>Close</button>
        </div>
      </form>
    </div>
  );
}

export default Calculator;