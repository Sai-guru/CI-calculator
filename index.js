

let principal = document.getElementById('principal');
let rate = document.getElementById('rate');
let years = document.getElementById('years');
let total = document.getElementById('total');
let totalAmount = document.getElementById('total-amount');





function calculate() {
   
  const si = Number(principal.value * (rate.value/100) * years.value) /100;
   totalAmount.textContent = `Rs ${si}`;

}