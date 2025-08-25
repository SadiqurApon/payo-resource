document.getElementById("cashout-money")
.addEventListener("click", function(event){
    event.preventDefault();
    const cashoutPin = document.getElementById("cashout-pin").value;
    const convertedPIn = parseInt(cashoutPin);
    const cashoutAmount = document.getElementById("out-amount").value;
    const convertedAmount = parseFloat(cashoutAmount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(cashout-pin === 1234){
        const sum = convertedMainBalance - cashoutAmount;
        document.getElementById("main-balance").innerText = sum;
    }
    else{
        alert("Enter valid PIN");
    }
})