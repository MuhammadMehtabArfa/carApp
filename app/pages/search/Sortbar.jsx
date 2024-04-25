"use client"
import React,{useState} from "react";

const Sortbar = () => {
const [first, setfirst] = useState(4)

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full max-w-lg p-6 space-y-4 border border-gray-300 rounded-lg">
        <div className="flex flex-col space-y-2">
          <label for="input1" className="text-sm font-medium">
            Input Field 1
          </label>
          <input
            type="text"
            id="input1"
            name="input1"
            placeholder="Enter input"
            className="p-2 border border-gray-300 rounded-[30px] shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label for="input2" className="text-sm font-medium">
            Input Field 2
          </label>
          <input
            type="text"
            id="input2"
            name="input2"
            placeholder="Enter input"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Range Fields</label>
          <input
            type="range"
            id="range1"
            name="range1"
            min="0"
            max="5000"
            className="w-full text-black-main"
          />
          <input
            type="range"
            id="range2"
            name="range2"
            value={first}
            min="0"
            onChange={(e)=> setfirst(e.target.value)}
            max="10000"
            className="w-full"
          />
          <p>{first}</p>
          <input
            type="range"
            id="range3"
            name="range3"
            min="0"
            max="100"
            className="w-full"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label for="selectField" className="text-sm font-medium">
            Select Field
          </label>
          <select
            id="selectField"
            name="selectField"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Sortbar;
