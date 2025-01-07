function calculator() {
    let num1 = document.getElementById("num-1").value;
    let num2 = document.getElementById("num-2").value;
    let operator = document.getElementById("operator").value;
    let result = document.getElementById("result");

    result.textContent = eval(num1 + operator + num2);
}
