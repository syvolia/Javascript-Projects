
//function
function calculateTip() {
    var billamt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var peopleamt = document.getElementById("peopleamt").value;

    //Validation
    if (billamt === "" || serviceQual == 0) {
        window.alert("Please enter the missing values");
    }
    if (peopleamt === "" || peopleamt <= 1) {
        peopleamt = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculations
    var total = (billamt * serviceQual) / peopleamt;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //Display Tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}


//Hide tip elements
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
//Calling button
document.getElementById("calculate").onclick = function () {
    calculateTip();
};

