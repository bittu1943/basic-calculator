// buttons
function operationAddButton(){
    var userInput = document.getElementById("userInput").value;
    var addButton = document.getElementById("addButton").value; 
    userInput = userInput+addButton;
    document.getElementById("userInput").value = userInput;

}

function operationSubtractButton(){
    var userInput = document.getElementById("userInput").value;
    var subtractButton = document.getElementById("subtractButton").value; 
    userInput = userInput+subtractButton;
    document.getElementById("userInput").value = userInput;

}

function operationMultiplyButton(){
    var userInput = document.getElementById("userInput").value;
    var multiplyButton = document.getElementById("multiplyButton").value; 
    userInput = userInput+multiplyButton;
    document.getElementById("userInput").value = userInput;

}

function operationDivideButton(){
    var userInput = document.getElementById("userInput").value;
    var divideButton = document.getElementById("divideButton").value; 
    userInput = userInput+divideButton;
    document.getElementById("userInput").value = userInput;
}

function operationModulus(){
    var userInput = document.getElementById("userInput").value;
    var modulusOperatorButton = document.getElementById("modulusOperatorButton").value; 
    userInput = userInput+modulusOperatorButton;
    document.getElementById("userInput").value = userInput;

}




// calculation
function calculate(){

    var userInput = document.getElementById("userInput").value;

    var a = eval(userInput);
    console.log(a);
    document.getElementById("result").innerHTML = a;

}
// calculation-end


