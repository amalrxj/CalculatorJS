function btClick(val) {
    document.getElementById("screen").value += val;

}
function clearScr() {
    document.getElementById("screen").value = "";
}
function eqClick() {
    var text = document.getElementById("screen").value;
    var result = eval(text);
    document.getElementById("screen").value = result;

}