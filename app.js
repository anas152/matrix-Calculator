


let num1 = document.getElementById("input1")//.value;
let num2 = document.getElementById("input2")//.value;
let inputsDiv1 = document.getElementById("inputdiv1");
let inputsDiv2 = document.getElementById("inputdiv2");
let resultDiv = document.getElementById("resultDiv");



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
// console.log(value1)
  let add = parseInt(value1) + parseInt(value2);
//  console.log(add)

let res = document.querySelector(`#resultDiv-${i}${j}`).value = add;
// console.log(res);

    }
  resultDiv.innerHTML += "<br />>"
  }


 }



 


 
