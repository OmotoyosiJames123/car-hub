function addnumbers(){
    document.getElementById("result").value = "";
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let ans = parseInt(+num1, +num2);
    document.getElementById('result').value = ans;
}
 
function substract(){
    document.getElementById("result").value = "";
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let ans = parseInt(+number1, +number2);
    document.getElementById('result').value = ans;
}
function multiply(){
    document.getElementById("result").value = "";
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value
    let ans = parseInt(+num1 * +num2);
    document.getElementById('result').value = ans
}
    
function division(){
    document.getElementById("result").value = "";
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let ans = parseInt(+num1 / +num2);
    document.getElementById('result').value = ans
}
function cleared(){
     document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('result').value = "";
}