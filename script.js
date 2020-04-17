var button = document.getElementById("button");
var input = document.getElementById("enter");
var ol = document.querySelector("ol");

function inputLength () {
    return input.value.length;
};

function createListElement () {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    input.value = ""; 
}
function addListAfterClick () {
        if (inputLength() > 0) {
        createListElement(); 
     }  
}
function addListAfterKeyPress (event) {
    if (inputLength() > 0 && event.keyCode === 13 ) {
        createListElement();
    }  
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);

