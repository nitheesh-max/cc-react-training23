function inputText(text) {
    var box = document.getElementById("textbox").innerHTML;
    box += text;
    document.getElementById("textbox").innerHTML = box;
}

function clearAll() {
    document.getElementById("textbox").innerHTML = "";   
}

function clearOne() {
    var box = document.getElementById("textbox").innerHTML;
    document.getElementById("textbox").innerHTML = box.slice(0,box.length-1); 
}

function result() {
    var box = document.getElementById("textbox").innerHTML;
    var result = eval(box);
    result = result.toFixed(4);
    document.getElementById("textbox").innerHTML = "=" + result;

}

