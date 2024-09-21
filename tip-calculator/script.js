function calculate() {
    let billAmount = document.getElementById("bill").value;
    let selectedTip = document.querySelector('input[name="tip"]:checked')
    let totalPeople = document.getElementById("count").value;
    let result = document.getElementById("output")

    if (selectedTip) {
        let tipPercentage = selectedTip.value
        let tip = parseFloat(tipPercentage)
        let bill = parseFloat(billAmount)
        console.log("Selected tip percentage:", tipPercentage)
        let bill_with_tip = ((tip / 100) * bill) + bill
        let people = parseFloat(totalPeople)
        let finalAmount = bill_with_tip / people
        let perHead = finalAmount.toFixed(2)
        result.innerHTML = "<p> Each person should pay <strong>₹" + perHead + "</strong></p>"
    }
}
