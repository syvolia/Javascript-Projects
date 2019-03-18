//Listen to submit
document.getElementById("loan-form").addEventListener("submit", computeResults);
//UI
function computeResults(e) {
    const UIamount = document.getElementById("amount").value;
    const UIinterest = document.getElementById("interest").value;
    const UIyears = document.getElementById("years").value;
    
    //Calculate
    const principal = parseFloat(UIamount);
    const Calculateinterest = parseFloat(UIinterest) / 100 / 12;
    const calculatepayments = parseFloat(UIyears) * 12;
    
    //Compute  monthly payment
    const x = Math.pow(1 + Calculateinterest, calculatepayments);
    const monthly = (principal * x * Calculateinterest) / (x - 1);
    const monthlyPayment = monthly.toFixed(2);

    //Compute  interest
    const totalInterest = (monthly * calculatepayments - principal).toFixed(2);

    //Compute  Total Payment
    const totalPayment = (monthly * calculatepayments).toFixed(2);

    //Display Results
    document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;
    document.getElementById("totalInterest").innerHTML = "%" + totalInterest;
     document.getElementById("totalPayment").innerHTML = "$" + totalPayment;

    
    
    e.preventDefault();

}