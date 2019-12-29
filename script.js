    toogleCheckbox = document.getElementById("toogle");
    measurementSelect = document.getElementById("selectchoice");
    convertButton = document.getElementById("convert");
    

    convertButton.addEventListener("click", function() {
    let inputValue = document.getElementById("input").value;
    let numb = parseInt(inputValue, 10);
    let select =  measurementSelect.value
    let resultValue = 0;
    var choise = toogle.checked;
    if (select === "mile" && choise) {
        console.log("select равен mile")
        resultValue = numb * 6213;
    } else if (select === "mile" && choise === false) {
        resultValue = numb * 0.6213;
    } else if (select === "verst" && choise) {
        console.log("select равен versta")
        resultValue = numb * 1066;
    } else if (select === "verst" && choise === false) {
        resultValue = numb * 1.0668;
    } else if (select === "foot" && choise) {
        console.log("select равен mile")
        resultValue = numb * 3048;
    } else if (select === "foot" && choise === false) {
        resultValue = numb * 0.3048;
    } else if (select === "yard" && choise) {
        console.log("select равен mile")
        resultValue = numb * 9144;
    } else {
        resultValue = numb * 0.9144;
    } 
    document.getElementById('result').value = resultValue;
});




