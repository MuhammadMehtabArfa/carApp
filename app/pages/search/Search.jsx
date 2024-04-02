import React from "react";
import CarCard from "@/Components/CarCard";
const Search = () => {
  return (
    <>
      <div className="  bg-[url('/background2.png')] h-[160px] w-screen bg-no-repeat bg-cover"></div>
      <div className="bg-light main p-12">
        {" "}
        <div className="flex justify-center items-center">  <input type="search" name="Search" id="2" /><input type="search" name="Search" id="2" /></div>
        <input type="search" name="Search" id="2" />
      </div>
      <div className="flex">
        <div className=" text-white bg-black-main w-[25%]">hi</div>
        <div className="bg-white w-[75%] p-3 grid grid-cols-3 ">
          <CarCard
            img="/car1.png"
            name="Posrch Panamera 2024 - Big Deal"
            transmission="Automatic"
            fuel="
Diesel"
            year={2021}
            speed={300}
          />
          <CarCard
            img="/car2.png"
            name="Shelby Mustang 2024 - 5.0 L"
            transmission="Automatic"
            fuel="
Diesel"
            year={2021}
            speed={300}
          />
          <CarCard
            img="/car3.png"
            name="Mercedes Amg get 2024"
            transmission="Automatic"
            fuel="
Diesel"
            year={2021}
            speed={300}
          />{" "}
          <CarCard
            img="/car1.png"
            name="Posrch Panamera 2024 - Big Deal"
            transmission="Automatic"
            fuel="
Diesel"
            year={2021}
            speed={300}
          />
          <CarCard
            img="/car2.png"
            name="Shelby Mustang 2024 - 5.0 L"
            transmission="Automatic"
            fuel="
Diesel"
            year={2021}
            speed={300}
          />
          <CarCard
            img="/car3.png"
            name="Mercedes Amg get 2024"
            transmission="Automatic"
            fuel="
Diesel"
            year={2021}
            speed={300}
          />{" "}
          <CarCard
            img="/car1.png"
            name="Posrch Panamera 2024 - Big Deal"
            transmission="Automatic"
            fuel="
Diesel"
            year={2021}
            speed={300}
          />
          <CarCard
            img="/car2.png"
            name="Shelby Mustang 2024 - 5.0 L"
            transmission="Automatic"
            fuel="
Diesel"
            year={2021}
            speed={300}
          />
          <CarCard
            img="/car3.png"
            name="Mercedes Amg get 2024"
            transmission="Automatic"
            fuel="
Diesel"
            year={2021}
            speed={300}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
