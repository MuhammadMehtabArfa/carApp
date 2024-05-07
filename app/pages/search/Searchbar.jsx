import React from "react";

const Searchbar = ({ handleSubmitt, value, setValue, sort, setSort }) => {
  return (
    <div className="searchbar-container px-auto items-center">
      {" "}
      {/* Added container class and flex styles */}
      <form
        className="searchbar mx-auto flex my-5 overflow-hidden bg-gray-100 border rounded-none md:rounded-full p-5 md:flex-row flex-col w-[300px] md:w-3/4 lg:w-1/2 items-center gap-2"
        onSubmit={handleSubmitt}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className=" w-full bg-transparent   outline-gray-400 border px-3 flex-grow"
          placeholder="Search"
          name=""
          id=""
        />
        <div className="sort-dropdown w-1/3  items-center">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-md border-none focus:outline-none bg-transparent py-3 pl-1 pr-7 text-gray-500 sm:text-sm"
          >
            <option value="honda">Honda</option>
            <option value="porsh">Porsche</option>
            <option value="shelby">Shelby</option>
            <option value="toyota">Toyota</option>
          </select>
        </div>
        <button
          type="submit"
          className="searchbar-btn w-1/3 ml-4 bg-gray-500 hover:bg-black-main text-white font-bold py-2 px-4 rounded-[20px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
