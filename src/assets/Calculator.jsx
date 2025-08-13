
import React, { useState } from "react";
import { evaluate } from "mathjs"; // safer eval

function Calculator() {



  const [input, setInput] = useState(""); // Stores the user input
  const [liveResult, setliveResult] = useState("second") // stores live result

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === "=") {
      try {
          const result = evaluate(input); // safely calculate
        setInput(result.toString());
        setliveResult("");
      } catch {
        setInput("Error"); // If invalid input
        setliveResult("");
      }
    } else if (value === "AC") {
      setInput(""); // All Clear
      setliveResult("");
    } else if (value === "C") {
      const newInput = (input.slice(0, -1)); // Delete last character
      setInput(newInput)
      try {
        setliveResult(newInput ? eval(newInput).toString() : "");
      } catch  {
        setliveResult(newInput ? eval(newInput).toString() : "");
      }

    } else {
      const newInput = (input + value); // Append value to input
      setInput(newInput)

       try {
         if (/[+\-*/%]$/.test(newInput)) {
    setliveResult(""); // Don't evaluate if expression ends with an operator
  } else {
    setliveResult(newInput ? eval(newInput).toString() : "");
  }
      } catch  {
        setliveResult(newInput ? eval(newInput).toString() : "");
      }
    }
 }


  return (
    <div className="flex flex-col  bg-[#1E1E1E] rounded-2xl w-[95%]  md:w-[400px] border-2 border-blue-900 h-[530px] p-2.5">
        <div className='w-[100%] bg-[#555555] rounded overflow-hidden  h-[100px] flex items-center justify-end px-4 text-white text-4xl'>
        {input || "0"}
        </div>
         <div className='w-[100%] bg-[#555555] rounded overflow-hidden  h-[100px] flex items-center justify-end px-4 text-white text-4xl'>
         {liveResult || ""}
        </div>
        <div className="grid grid-cols-4 grid-rows-5 gap-2 py-2.5 ">
  {[
    "AC", "%", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "C", "0", "."
  ].map((btn, index) => (
    <button
      key={index}
      onClick={() => handleClick(btn)}
      className={`p-2 h-18 rounded-2xl flex items-center justify-center text-3xl ${
        btn === "C"
          ? "bg-[#F4A825] text-black"
          : btn === "="
          ? "bg-[#E89D20] row-span-2 h-full text-black"
          : ["+", "-", "*", "/", "%"].includes(btn)
          ? "bg-[#F4E1A1] text-black"
          : btn === "AC"
          ? "bg-[#F4A825] text-black"
          : "bg-[#555555] text-white"
      }  `}
    >
      {btn}
    </button>
  ))}
</div>

    </div>
  )
}

export default Calculator






