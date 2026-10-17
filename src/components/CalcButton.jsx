import '../styling/calculatorButton.css';

function openModal() {
  document.getElementById('modalContainer').classList.add('show');
}

function CalcButton() {
  return (
    <button type="button" className="calcButton" onClick={openModal}>
      Calculator
    </button>
  );
}
export default CalcButton;