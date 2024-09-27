

// let plus = document.getElementById("Plus").value;
// let minus = document.getElementById("minus").value;
let num1 = document.getElementById("input1")//.value;
let num2 = document.getElementById("input2")//.value;
let inputsDiv1 = document.getElementById("inputdiv1");
let inputsDiv2 = document.getElementById("inputdiv2");
let resultDiv = document.getElementById("resultDiv");
// let rows;
// let columns;


function matricesCal() {
  
  num1 = parseInt(num1.value)
  num2 = parseInt(num2.value)
    
  inputsDiv1.innerHTML = "";
  inputsDiv2.innerHTML = "";
   
for(let i = 0; i<num1; i++){
  for(let j= 0; j<num2; j++){
  inputsDiv1.innerHTML += ` <input type="number" id="inputbox1-${i}${j}" style="width: 30px;" value="0">`;
  inputsDiv2.innerHTML += ` <input type="number" id="inputbox2-${i}${j}" style="width: 30px;" value="0">`;

}

  inputsDiv1.innerHTML += "<br />"
   inputsDiv2.innerHTML += "<br />"
 } 
}

 function multiplication(){
  for(let i=0; i<num1; i++){
    for(let j=0; j<num2; j++){
  let value1 = document.getElementById(`inputbox1-${i}${j}`).value
  let value2 = document.getElementById(`inputbox2-${i}${j}`).value
console.log(value1)
  value1 = parseInt(value1)
  value2 = parseInt(value2)
  
 let result = value1 + value2;
//  console.log(result)

resultDiv.innerHTML +=` <input type="number" id="resultDiv-${i}${j}" style="width: 30px;" value = ${i}${j}`;

    }
  resultDiv.innerHTML += "<br>"
  }


 }



 


 
// if (input1 === input2){
//     const calculating = input1 * input2;
//     console.log(calculating)
//     let inputTag = document.createElement("input");
//     // console.log(inputTag);
//       matrix1 = matrix1.innerHTML = inputTag
//     console.log(matrix1);

// }





// function calculateMatrix() {
//     const num1 = parseInt(document.getElementById("num1").value);
//     const num2 = parseInt(document.getElementById("num2").value);
//     const operation = document.getElementById("operation").value;
  
//     // Matrix create karna
//     const matrix1 = [
//       [num1, 0],
//       [0, num1]
//     ];
//     const matrix2 = [
//       [num2, 0],
//       [0, num2]
//     ];
  
//     // Operation apply karna
//     let result;
//     if (operation === "+") {
//       result = [
//         [matrix1[0][0] + matrix2[0][0], matrix1[0][1] + matrix2[0][1]],
//         [matrix1[1][0] + matrix2[1][0], matrix1[1][1] + matrix2[1][1]]
//       ];
//     } else if (operation === "-") {
//       result = [
//         [matrix1[0][0] - matrix2[0][0], matrix1[0][1] - matrix2[0][1]],
//         [matrix1[1][0] - matrix2[1][0], matrix1[1][1] - matrix2[1][1]]
//       ];
//     }
  
//     // Result display karna
//     const resultDiv = document.getElementById("result");
//     resultDiv.innerHTML = `
//       Matrix 1: <br>
//       ${matrix1[0][0]} ${matrix1[0][1]} <br>
//       ${matrix1[1][0]} ${matrix1[1][1]} <br>
//       <br>
//       Matrix 2: <br>
//       ${matrix2[0][0]} ${matrix2[0][1]} <br>
//       ${matrix2[1][0]} ${matrix2[1][1]} <br>
//       <br>
//       Result: <br>
//       ${result[0][0]} ${result[0][1]} <br>
//       ${result[1][0]} ${result[1][1]}
//     `;
//   }





















// function matricCal() {

//     let plus = document.getElementById("Plus").value;
//      let minus = document.getElementById("minus").value;
//     let input1 = document.getElementById("input1").value;
//     let input2 = document.getElementById("input2").value;


// if(input1 === input2){
//     let equal = input1 * inp                                                                                                                                                                                                                                                    zxut2
//     if((plus.value) === "+"){
//    let createInp = document.createElement("input");
// console.log(createInp.value);


//     }
// }else {
//     alert("Please enter a same number");
// }

//  }