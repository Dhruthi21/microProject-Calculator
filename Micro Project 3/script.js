var display = document.getElementById("output-inner");

function getInput(value) {
    var userInput = value;
    
    if(display.value && display.value.slice(-1) === '.') {
        if (value === ".") {
            return;
        }
    }

    if(userInput === 'x') {
        userInput = '*'
    }

    display.value += userInput;
}

function isOperator(userInput) {
    return userInput === "+" || userInput === "-" || userInput === "x" || userInput === "/";
}

function delHandler() {
    currentVal = display.value;
    if (currentVal === "") {
        alert("Nothing to delete")
    }
    else {
        display.value = display.value.slice(0, -1);
    }
}

function resetHandler() {
    currentVal = display.value
    if (currentVal === "") {
        alert("Nothing to clear");
    }
    else {
        display.value = "";
    }
}

function result() {
    currentVal = display.value;
    if (currentVal === "") {
        alert("Nothing to evaluate");
    }
    else {
        try{
            display.value = eval(currentVal);
        }
        catch(err) {
            alert("Invalid Input");
        }
    }
}
