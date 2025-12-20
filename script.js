// onclick of any button that button should be reflected in the input box.
let button_clicked = document.getElementById("second-sub-container");
let input_box = document.getElementById("display");
let input_value = "";
let button_operator = null;
let firstOperand = "";
let secondOperand = "";

        function equate(firstOperand, secondOperand, button_operator){
                    if (button_operator == '+'){
                        return Number(firstOperand) + Number(secondOperand);
                    }
                    else if (button_operator == '-'){
                        return Number(firstOperand) - Number(secondOperand);
                    }
                    else if (button_operator == '*'){
                        return Number(firstOperand) * Number(secondOperand);

                    }
                    else if (button_operator == '/'){
                        return Number(firstOperand) / Number(secondOperand);

                    }
                    else if (button_operator == '^'){
                        return Number(firstOperand) ** Number(secondOperand);

                    }
                    else if (button_operator == '%'){
                        return Number(firstOperand) % Number(secondOperand);

                    }
                    else if (button_operator == '!='){
                        if (Number(firstOperand) != Number(secondOperand)){
                            return true;
                        }
                        else {
                            return false};
                         

                    }
                    else if (button_operator == '>'){
                        if (Number(firstOperand) > Number(secondOperand)){
                            return true;
                        }
                        else return false;

                    }
                    else if (button_operator == '<'){
                        if (Number(firstOperand) < Number(secondOperand)){
                            return true;
                        }
                        else return false;

                    }
                    else if (button_operator == '>='){
                        if (Number(firstOperand) > Number(secondOperand) || Number(firstOperand) == Number(secondOperand)){
                            return true;
                        }
                        else return false;

                    }
                    else if (button_operator == '<='){
                        if (Number(firstOperand) < Number(secondOperand) || Number(firstOperand) == Number(secondOperand)){
                            return true;
                        }
                        else return false;

                    }
                    else if (button_operator == 'AND'){
                        return Number(firstOperand) & Number(secondOperand);
                    }
                    else if (button_operator == 'OR'){
                        return Number(firstOperand) | Number(secondOperand);
                    }
                    else if (button_operator == 'NOT'){
                        return ~Number(firstOperand);
                    }

                    // else if (button_operator == 'DEL'){
                    //     return Number(firstOperand) & Number(secondOperand);
                    // }
                    
                    


                    
                }
button_clicked.addEventListener('click', function(e){

    if (e.target.tagName != "BUTTON") return;
    // console.log(e);
    let single_input = e.target.textContent;
    if (single_input != "DEL"){
        input_value += single_input;
    }
    
    console.log("latest input",input_value);
    input_box.value =  input_value;
    console.log("got clicked.....................", e.target.textContent);

    let justEvaluated = false;

    // functionality for display
    if (single_input >= "0" && single_input <= "9"){
        console.log("its a number...", single_input);
        
        if (button_operator == null){
            firstOperand += single_input;
            // firstOperand += e.target.textContent;
            console.log("this is the first one",firstOperand);

        }
        else{
            //working for second operand
            secondOperand += single_input;
            console.log("this is the second one", secondOperand);
        }


    }
    else{
        console.log("no no not a number");



        if (single_input == '+'){
                console.log("we are adding!!!");
                button_operator = '+';
                secondOperand = "";

            }
        else if (single_input == '-'){
                console.log("we are suntracting!!!");
                button_operator = '-';
                secondOperand = "";

                }
        else if (single_input == '*'){
                    console.log("we are multilying!!!");
                    button_operator = '*';
                    secondOperand = "";
                }
        else if (single_input == '/'){
                    console.log("we are dividing!!!");
                    button_operator = '/';
                    secondOperand = "";
                }
        else if (single_input == '^'){
                    console.log("we are exponenting!!!");
                    button_operator = '^';
                    secondOperand = "";
                }
        else if (single_input == '%'){
                    console.log("we are finding modulos!!!");
                    button_operator = '%';
                    secondOperand = "";
                }
        else if (single_input == '!='){
                    console.log("we are finding inequality!!!");
                    button_operator = '!=';
                    secondOperand = "";
                }
                else if (single_input == '>'){
                    console.log("we are findong greator one!!!");
                    button_operator = '>';
                    secondOperand = "";
                }
                else if (single_input == '<'){
                    console.log("we are finding lesser one!!!");
                    button_operator = '<';
                    secondOperand = "";
                }
                else if (single_input == '>='){
                    console.log("we are finding greator than or equal to!!!");
                    button_operator = '>=';
                    secondOperand = "";
                }
                else if (single_input == '<='){
                    console.log("we are finding less than or equal to!!!");
                    button_operator = '<=';
                    secondOperand = "";
                }
                else if (single_input == 'AND'){
                    console.log("we are finding bitwise AND");
                    button_operator = 'AND';
                    secondOperand = "";
                }
                else if (single_input == 'OR'){
                    console.log("we are finding bitwise OR!!!");
                    button_operator = 'OR';
                    secondOperand = "";
                }
                else if (single_input == 'NOT'){
                    console.log("we are finding bitwise NOT!!!");
                    button_operator = 'NOT';
                    secondOperand = "";
                }
                else if (single_input == 'CC'){
                    console.log("we are resetting!!!");
                    button_operator = null;
                    firstOperand = "";
                    secondOperand = "";
                    input_value = "";
                    input_box.value = "";
                }
                else if (single_input == 'DEL'){
                    // console.log("......",input_box.textContent, single_input, e.target.textContent, input_value);
                    if (button_operator == "AND"){
                        button_operator = null;
                        input_value = firstOperand;
                        console.log("here is the value after DEL on operatir", input_value);
                        input_box.value = input_value;
                        console.log("here is the final result after DEL", input_value)
                    }
                    else if (button_operator == "OR") {
                        button_operator = null;
                        input_value = firstOperand;
                        input_box.value = input_value;

                    }
                    else if (button_operator == "NOT") {
                        button_operator = null;
                        input_value = firstOperand;
                        input_box.value = input_value;

                    }
                    else if (button_operator == ">=") {
                        button_operator = null;
                        input_value = firstOperand;
                        input_box.value = input_value;

                    }
                    else if (button_operator == "<=") {
                        button_operator = null;
                        input_value = firstOperand;
                        input_box.value = input_value;

                    }
                    else if (button_operator == "!=") {
                        button_operator = null;
                        input_value = firstOperand;
                        input_box.value = input_value;

                    }
                    
                    else{
                        input_value = input_value.slice(0, -1);
                    input_box.value = input_value;
                    console.log("checking for updated deledted vaslyue",input_value);
                    secondOperand = "";
                    }
                    

                    console.log("we are deleting!!!");

                }

        else if(single_input == '=' || single_input == 'Enter'){
                
                console.log("we are equating!!!");
                let result = equate(firstOperand, secondOperand, button_operator);
                console.log("final answer: ",result);
                input_box.value = result;
                firstOperand = result;
                secondOperand = "";
                input_value = "";
                // input_box.value = "";
                // result = "";
                
                console.log("check answer: ",firstOperand, secondOperand, input_value);

                

            }

            }
    


});
module.exports = {equate};
