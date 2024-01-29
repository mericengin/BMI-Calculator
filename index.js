
function calculateBmi() {

    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var result = document.getElementById("result");

    if(height <= 0 || isNaN(height)) {
        result.innerHTML = "Please Provide a valid Height!"
    } else if (weight <= 0 || isNaN(weight)) {
        result.innerHTML = "Please Provide a valid Weight!"
    } else {

        var bmi = weight / Math.pow(height / 100, 2);

        if(bmi < 18.6) {
            result.innerHTML = "Underweight!";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = "Normal and Healthy!";
        } else {
            result.innerHTML = "Overweight!";
        }
        
    }

}