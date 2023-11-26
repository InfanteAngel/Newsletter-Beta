
function validate(event) {
    event.preventDefault();
    var data = document.getElementById("data").value;
    let errorText = document.getElementById("errorText")
    let inputLabel = document.getElementById("data")
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

    if (!data.match(pattern) || (data == null)){
        errorText.style.visibility = "visible";
        inputLabel.style.backgroundColor =  "hsl(4, 100%, 67%, 0.250)";
        inputLabel.style.color = "hsl(4, 100%, 67%, 0.7)";
        inputLabel.style.borderColor = "hsl(4, 100%, 67%, 0.7)";
    }
    else
    {
        location.href = "./succes.html";
        document.addEventListener("DOMContentLoaded", function () {
            console.log("running");
            document.getElementById("emailData").innerText = data;
        });
        
    }
}

