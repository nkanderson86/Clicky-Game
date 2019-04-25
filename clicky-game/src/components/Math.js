import React from "react";

function Math(props) {
    let firstNum = parseInt(props.eqn.num1)
    let secondNum = parseInt(props.eqn.num2)
    let answer = 0;

    switch (props.eqn.op) {
        case "+":
            answer = firstNum + secondNum
            break
        case "-":
            answer = firstNum - secondNum
            break
        case "*":
            answer = firstNum * secondNum
            break
        case "/":
            answer = firstNum / secondNum
            break
        default:
            return null
    }

    return (
        <span>{firstNum} {props.eqn.op} {secondNum} = {answer}</span>
    );
}

export default Math;