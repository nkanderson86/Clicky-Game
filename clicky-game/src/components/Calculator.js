import React from "react";
import Math from "./Math"
// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
let eqn1 = { num1: 19, num2: 341, op: "+" }
let eqn2 = { num1: 42, num2: 17, op: "-" }
let eqn3 = { num1: 100, num2: 3, op: "*" }
let eqn4 = { num1: 96, num2: 4, op: "/" }
let eqn5 = { num1: 24, num2: 4, op: "/" }

let equations = [eqn1, eqn2, eqn3, eqn4, eqn5]

function Calculator() {

  let solved = equations.map(eqn => {
    return <p><Math eqn={eqn} /></p>
  })

  return (
    <div>
      {solved}
    </div>

  );
}

export default Calculator;
