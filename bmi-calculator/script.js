window.onload = function () {
    var slider = document.getElementById("height");
    var output = document.getElementById("heightValue");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value + " cm";
    }
}
function calculate() {
    let selectedGender = document.querySelector('input[name="gender"]:checked')
    let height = document.getElementById("height").value;
    let age = document.getElementById("ageValue").value;
    let weight = document.getElementById("weightValue").value
    let result = document.getElementById("output")
    if (selectedGender) {
        let bmi = (weight * 10000) / Math.pow(height, 2)
        bmi = bmi.toFixed(2)
        console.log(bmi);
        if (bmi < 18.5) {
            result.innerHTML = "Underweight"
        }

        else if (bmi < 24.9) {
            result.innerHTML += "Normal weight";
        } else if (bmi < 29.9) {
            result.innerHTML += "Overweight";
        } else {
            result.innerHTML += "Obesity";
        }
    }
    else {
        console.log("No Gender Selected");

    }
}