function calculateTotal() {
 
  const costPerLiter = parseFloat(document.getElementById("cost").value);
  const liters = parseFloat(document.getElementById("liters").value);

  
  const total = costPerLiter * liters;

  
  document.getElementById("result").innerText = "Total: £" + total.toFixed(2);
}