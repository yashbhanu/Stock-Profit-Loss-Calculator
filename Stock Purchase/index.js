//Stock

let initialPrice = document.querySelector('#initialPrice');
let stockQuantity = document.querySelector('#stockQuantity');
let currentPrice = document.querySelector('#currentPrice');
let submitBtn = document.querySelector('#submitBtn');
let output = document.querySelector('#output');

submitBtn.addEventListener("click", submitHandler);

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        let loss = ((initial - current) * quantity).toFixed(2);
        let lossPercent = ((loss / initial) * 100).toFixed(2);
        output.style.color = 'red';
        showOutput(`You have suffered a loss of ${loss} and a Loss percent of ${lossPercent} %`);
    }
    else if (current > initial) {
        let profit = ((current - initial) * quantity).toFixed(2);
        let profitPercent = ((profit / initial) * 100).toFixed(2);
        output.style.color = 'green';
        showOutput(`Wow! You have a profit of ${profit} and a Profit percent of ${profitPercent} %`);
    }
    else if(current === initial) {
        output.style.color = 'yellow';
        showOutput(`No pain No Gain ! No Gain No Pain`);
    }
}
function submitHandler() {
    // a = initialPrice.value;
    // console.log(a);
    if (initialPrice && stockQuantity && currentPrice) {
        let ip = (initialPrice.value);
        let qty = (stockQuantity.value);
        let curr = (currentPrice.value);
        calculateProfitAndLoss(ip, qty, curr);
    }
    else{
        output.innerText = "Please enter the details correctly";
    }
}

function showOutput(message) {
    output.innerHTML = message
}