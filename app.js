let num1 = document.getElementById("input1");
let num2 = document.getElementById("input2");
let inputsDiv1 = document.getElementById("inputdiv1");
let inputsDiv2 = document.getElementById("inputdiv2");
let resultDiv = document.getElementById("resultDiv");

function matricesCal() {
    inputsDiv1.innerHTML = "";
    inputsDiv2.innerHTML = "";
    resultDiv.innerHTML = "";

    let rows = parseInt(num1.value);
    let cols = parseInt(num2.value);

  
    if (isNaN(rows) || isNaN(cols) || rows !== cols) {
        alert("Please enter valid and equal row and column numbers.");
        return;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            inputsDiv1.innerHTML += `<input type="number" id="inputbox1-${i}-${j}" style="width: 50px;" value="0">`;
            inputsDiv2.innerHTML += `<input type="number" id="inputbox2-${i}-${j}" style="width: 50px;" value="0">`;
        }
        inputsDiv1.innerHTML += "<br />";
        inputsDiv2.innerHTML += "<br />";
    }
}

function calculateResult() {
    resultDiv.innerHTML = ""; 
    let rows = parseInt(num1.value);
    let cols = parseInt(num2.value);
    let operation = document.querySelector("select").value;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let value1 = parseInt(document.getElementById(`inputbox1-${i}-${j}`).value);
            let value2 = parseInt(document.getElementById(`inputbox2-${i}-${j}`).value);

            let result;
            if (operation === "+") {
                result = value1 + value2;
            } else if (operation === "-") {
                result = value1 - value2;
            }

            resultDiv.innerHTML += `<input type="number" readonly style="width: 50px;" value="${result}">`;
        }
        resultDiv.innerHTML += "<br />";
    }
}
