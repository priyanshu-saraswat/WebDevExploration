function generate() {
    let city = document.getElementById("city").value;
    let pet = document.getElementById("pet").value;
    let output = document.getElementById("output");

    let bandName = city + ' ' + pet

    output.innerHTML = "<p>Your Band Name Could Be: <strong>" + bandName + "</strong></p>";
    
}