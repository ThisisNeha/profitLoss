const initialValue = document.querySelector("#initial-value");
const stockValue = document.querySelector("#stock-value");
const currentValue = document.querySelector("#current-value");
const button = document.querySelector("#btn");
const outputDiv = document.querySelector("#output");

function buttonHandler() {
  const ip = Number(initialValue.value);
  const qty = Number(stockValue.value);
  const curr = Number(currentValue.value);

  calculateProfitLoss(ip, qty, curr);
}

function calculateProfitLoss(initial, quantity, current) {
if (initial > current){
  var loss = (initial - current)*quantity ; 
  var lossPercent = (loss/initial)*100;
  outputDiv.style.color="orangered";
  showOutput(`Oops! your loss is ${loss} and loss percent is ${lossPercent.toFixed(2)} %🙄.`); 
}
else if(initial<current){
  var profit = (current-initial)*quantity ; 
  var profitPercent = (profit/initial)*100;
  showOutput(`Yaay! your profit is ${profit} and profit percent is ${profitPercent.toFixed(2)} % 😄.`); 
  outputDiv.style.color="blue";
}
else{
  showOutput(`No pain no gain and no gain pain 😬!`);
}
}

function showOutput(msg){
  outputDiv.innerHTML= msg;
}

button.addEventListener("click", buttonHandler);


