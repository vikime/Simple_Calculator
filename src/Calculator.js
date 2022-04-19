import React, { useState } from "react";

function Calculator() {
  const [calculation, setcalculation] = useState("");
  const [finalResult, setFinalResult] = useState("");

  const operation = ["/", "*", "-", "+", "."];

  const generateValue = (value) => {
    if (
      (operation.includes(value) && calculation === "") ||
      (operation.includes(value) && operation.includes(calculation.slice(-1)))
    ) {
      return;
    }
    setcalculation(calculation.concat(value));

    if (!operation.includes(value)) {
      setFinalResult(eval(calculation + value).toString());
    }
  };

  const addDigits = () => {
    const digit = [];
    for (let i = 1; i < 10; i++) {
      digit.push(
        <button key={i} onClick={() => generateValue(i.toString())}>
          {i}
        </button>
      );
    }
    return digit;
  };

  const calculate = (value) => {
    setcalculation(eval(calculation).toString());
  };

  const deleteLastVal = () => {
    if (calculation === "") {
      return;
    }

    const value = calculation.slice(0, -1);

    setcalculation(value);
  };

  return (
    <div className="calci">
      <div className="display">
        {finalResult ? <span> ({finalResult})</span> : " "} {calculation || "0"}
      </div>
      <div className="operator">
        <button onClick={() => generateValue("+")}>+</button>
        <button onClick={() => generateValue("-")}>-</button>
        <button onClick={() => generateValue("*")}>*</button>
        <button onClick={() => generateValue("/")}>/</button>
        <button onClick={deleteLastVal}>del/CE</button>
      </div>
      <div className="digits">
        {addDigits()}
        <button onClick={() => generateValue("0")}>0</button>
        <button onClick={() => generateValue(".")}>.</button>

        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
