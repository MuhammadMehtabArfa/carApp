import React from "react";

const Searchbar = ({ handleSubmitt, value, setValue, sort, setSort }) => {
  return (
    <div className="searchbar-container flex flex-col items-center">
      {" "}
      {/* Added container class and flex styles */}
      <form
        className="searchbar flex my-5 overflow-hidden bg-gray-100 border rounded-full p-5 w-2/3 md:w-3/4 lg:w-1/2"
        onSubmit={handleSubmitt}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="searchbar-input w-1/3 bg-transparent border-none focus:outline-none px-3 flex-grow"
          placeholder="Search"
          name=""
          id=""
        />
        <div className="sort-dropdown w-1/3 flex items-center">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 sm:text-sm"
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
