const button = document.getElementById("button");
const tipInput = document.getElementById("tip");
const billInput = document.getElementById("bill");
const totalInput = document.getElementById("total");


function calculateTotal(){
    const billValue = billInput.value;
    const tipvalue = tipInput.value;
    const totalValue = billValue * (1 + tipvalue / 100);
    totalInput.innerText = totalValue.toFixed(0);
   
}

button.addEventListener("click",calculateTotal);
