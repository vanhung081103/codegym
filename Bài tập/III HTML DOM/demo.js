function Add() {
    
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let sum = num1 + num2;
    let result = "ket qua la" + num1 + "+" + num2 + "=" +  sum;
    document.getElementById ('result').innerHTML = result;
}
function Sub() {

    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;   
    let diff = num1 - num2;
    let result = "ket qua la" + num1 + "-" + num2 + "=" + diff;
    document.getElementById ('result').innerHTML = result;

}
    
