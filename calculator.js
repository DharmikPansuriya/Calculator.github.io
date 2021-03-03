function reset() {
    location.reload();
}
function show(val) {
    document.getElementById("display").value += val;
}
function calculate() {
    var temp = document.getElementById("display").value;
    var result = eval(temp);
    document.getElementById("answer").value = result;
}