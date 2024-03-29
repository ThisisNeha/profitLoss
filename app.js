const initialValue = document.querySelector("#initial-value");
const stockValue = document.querySelector("#stock-value");
const currentValue = document.querySelector("#current-value");
const button = document.querySelector("#btn");
const outputDiv = document.querySelector("#output");

function buttonHandler() {
  const ip = Number(initialValue.value);
  const qty = Number(stockValue.value);
  const curr = Number(currentValue.value);
if(ip>0&& qty>0 && curr>0){
  calculateProfitLoss(ip, qty, curr);
}else{
  showOutput(`Not valid input.`);
  outputDiv.style.color="red";
}
}

function calculateProfitLoss(initial, quantity, current) {
  
if (initial > current){
  var loss = (initial - current)*quantity ; 
  var lossPercent = (loss/initial)*100;
  outputDiv.style.color="rgb(175, 2, 2)";
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
  outputDiv.style.color="green";
}
}

function showOutput(msg){
  outputDiv.innerHTML= msg;
}

button.addEventListener("click", buttonHandler);


