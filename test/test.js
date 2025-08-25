document.getElementById("btn-bd")
    .addEventListener("click", function () {
        document.getElementById('bd').style.display = "block";
        document.getElementById('usa').style.display = "none";
    })


document.getElementById("btn-usa")
.addEventListener("click", function(){
    document.getElementById('bd').style.display = "none";
    document.getElementById('usa').style.display = "block";
})