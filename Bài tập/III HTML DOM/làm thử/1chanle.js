function check() {
let num=document.getElementById("num1").value;
let divi = num % 2;
if (divi == 0) {
    let result = "Số" + num + " là số chẵn ";
    document.getElementById("ressult").innerHTML = result;
} 
else {
    let ressult = "số" + num + " là số lẻ ";
    document.getElementById("ressult").innerHTML = result;
}
}