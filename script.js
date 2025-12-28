// onclick of any button that button should be reflected in the input box.
let button_clicked = document.getElementById("buttons-container");
let input_box = document.getElementById("input");



//refactor code
//creating state instead of mutating globles 
const state = {
    input_value : "",
    operator : null,
    firstOperand : "",
    secondOperand : "",
    justEvaluated : false

}

const operators = {
    "+" : (a,b) => a + b,
    "-" : (a,b) => a - b,
    "*" : (a,b) => a * b,
    "/" : (a,b) => a/b,
    "^" : (a,b) => a ** b,
    "%" : (a,b) => a % b,
    ">" : (a,b) => a > b,
    "<" : (a,b) => a < b,
    ">=": (a,b) => a >= b,
    "<=": (a,b) => a <= b,
    "OR": (a,b) => a | b,
    "AND": (a,b) => a & b,
    "NOT": (a) => ~a,
    "!=" : (a,b) => a != b

}
//this function takes state and returns computed result by selecting an operator
function calculate(state){
    const {operator, firstOperand, secondOperand} = state;

    if (!operator) return firstOperand;

    const operation = operators[operator];
    return operator == "NOT" ? operation(Number(firstOperand)) : operation(Number(firstOperand), Number(secondOperand));


}


button_clicked.addEventListener('click', (e) =>{
    const button_ = e.target.closest("button");
    if (!button_) return ;
    const {type, value} = button_.dataset;
    if (type === "number"){
        handleNumber(value);
    }
    if (type === "operator"){
        handleOperator(value);
    }
    if (type === "action" && value === 'CC'){
        handleAction(value);
    }
    if (type === "action" && value === '=' || type === "action" && value === 'Enter'){
        handleAction(value);
    }
    if (type === "action" && value === 'DEL'){
        handleAction(value);
    }

    input_box.value = state.input_value;
});

// operator function
function handleOperator(op){
    if (state.firstOperand === "") return;
    state.operator = op;
    state.input_value += op;
}

//number function
function handleNumber(digit){
    if (state.operator === null){
        state.firstOperand += digit;
    }
    else{
        state.secondOperand += digit;
    }

    state.input_value += digit;
}

//action function
function handleAction(value){
    if (value === 'CC'){
    state.input_value = "",
    state.operator = null,
    state.firstOperand = "",
    state.secondOperand = ""
    }

    if (value === 'DEL'){
        state.input_value = state.input_value.slice(0, -1);
    }
    if (value === '=' || value === 'Enter'){
        if (state.input_value === null) return;

        const result = calculate(state);
        state.input_value = String(result);
        state.firstOperand = result;
        state.secondOperand = "";
        state.operator = null;
        state.justEvaluated = true;


    }
}

