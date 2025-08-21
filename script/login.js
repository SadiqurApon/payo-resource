document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const acountNumber = document.getElementById("acount-number").value;
        const pinNumber = document.getElementById("pin-number").value;
        const convertedPIn = parseInt(pinNumber);
        if(acountNumber.length === 8){
            if(convertedPIn === 1234){
                window.location.href= "./main.html"; 
            }
            else{
                alert("pin thik nai");
            }
        }
        else{
            alert("need valid acount number");
        }
    });