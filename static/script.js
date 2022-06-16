document.addEventListener('keydown', logKey);
function logKey(e) {
    if (e.key == "Backspace") {
        DeleteOne();
    };
    if (e.key == "Enter") {
        Calculate();
    }
    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/", "x", "X", "*", "."];
    if (keys.includes(e.key)) {
        if (e.key == "x") {
            Add('*');
        } else if (e.key == "X") {
            Add('*');
        } else {
            Add(e.key);
        }

    }
}
function Add(Key) {
    var result = document.getElementById("result");
    result.value = result.value + Key;
}
function DeleteOne() {
    var result = document.getElementById("result");
    var string = result.value;
    result.value = string.slice(0, string.length - 1);
}
function Calculate() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "/calculate/" + document.getElementById("result").value, false); // false for synchronous request
    xmlHttp.send(null);
    document.getElementById("result").value = xmlHttp.responseText;
}
function Clear() {
    var result = document.getElementById("result");
    result.value = "";
}
