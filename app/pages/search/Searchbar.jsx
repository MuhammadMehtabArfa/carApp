"use client";
import React from "react";

const Searchbar = ({handleSubmitt, value, setValue , sort, setSort }) => {

  return (
    <div className=" m-auto mt-5 mb-5 w-[40%] bg-gray  border rounded-full p-5">
      {" "}
      <form  className="flex" onSubmit={handleSubmitt}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(`${e.target.value}`)}
          className="bg-transparent border-none focus:outline-none  px-3"
          placeholder="Search your car here"
          name=""
          id=""
        />
        <div className=" flex items-center">
        
          <select
            value={sort}
            onChange={(e) => setSort(`${e.target.value}`)}
            className=" rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500  sm:text-sm"
          >
            <option value={"honda"}>Honda</option>
            <option value={"porsh"}>Prosh</option>
            <option value={"shelby"}>Shelby</option>
            <option value={"toyota"}>Toyota</option>
          </select>
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default Searchbar;
