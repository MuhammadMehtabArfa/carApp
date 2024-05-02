"use client";
import React, {  useState } from "react";
import CarCard from "@/Components/CarCard";
import Searchbar from "./Searchbar";

const Search = () => {
  const carData = [
    {
      img: "/car1.png",
      name: "Posrch Panamera 2024 - Big Deal",
      transmission: "Automatic",
      fuel: "Diesel",
      year: 2021,
      speed: 300,
    },
    {
      img: "/car2.png", // Same image path
      name: "Porsh Mustang 2024 - 5.0 L",
      transmission: "Automatic",
      fuel: "Diesel",
      year: 2021,
      speed: 300,
    },
    {
      img: "/car3.png", // Same image path
      name: "Mercedes Amg get 2024",
      transmission: "Automatic",
      fuel: "Diesel",
      year: 2021,
      speed: 300,
    },
    // Repeat the same image for the rest of the objects
    {
      img: "/car1.png",
      name: "BMW M3 2024",
      transmission: "Automatic",
      fuel: "Petrol",
      year: 2021,
      speed: 320,
    },
    {
      img: "/car2.png",
      name: "Audii R8 2024 - Performance",
      transmission: "Automatic",
      fuel: "Petrol",
      year: 2021,
      speed: 320,
    },
    {
      img: "/car3.png",
      name: "Toyota Supra 2024 - Black Edition",
      transmission: "Automatic",
      fuel: "Petrol",
      year: 2021,
      speed: 320,
    },
    {
      img: "/car1.png",
      name: "Honda Civic 2024 - Type R",
      transmission: "Manual",
      fuel: "Petrol",
      year: 2021,
      speed: 280,
    },
    {
      img: "/car1.png",
      name: "Ford Mustang 2024 - GT",
      transmission: "Automatic",
      fuel: "Petrol",
      year: 2021,
      speed: 320,
    },
    {
      img: "/car2.png",
      name: "Lamborghini Huracan 2024 - Spyder",
      transmission: "Automatic",
      fuel: "Petrol",
      year: 2021,
      speed: 350,
    },
    {
      img: "/car3.png",
      name: "Ferrari 488 2024 - Spider",
      transmission: "Automatic",
      fuel: "Petrol",
      year: 2021,
      speed: 340,
    },
  ];

  const [cars, setCars] = useState(carData);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSearch = (car) => {
    setSearch(car);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // search
    const name = search.toLowerCase();
    const filteredDataa = carData.filter(
      (item) =>
        item.name.toLowerCase().includes(name) ||
        item.name.toLowerCase() === name
    );

    // filter
    const optionn = sortOption.toLowerCase();
    const filteredData = carData.filter(
      (item) =>
        item.name.toLowerCase().includes(optionn) ||
        item.name.toLowerCase() === optionn
    );
    setCars(filteredData || filteredDataa);
  };
  const sortCars = (option) => {
    setSortOption(option);
  };

  return (
    <>
      <div className="  bg-[url('/background2.png')] h-[160px] w-full bg-no-repeat bg-cover"></div>
      <div className=" justify-center">
        <Searchbar
          value={search}
          setValue={handleSearch}
          sort={sortOption}
          setSort={sortCars}
          handleSubmitt={handleSubmit}
        />
      </div>
      <div className="bg-light-main items-center">
        <div className="bg-light-main w-[90%] p-3  flex flex-wrap gap-3  transition-all mx-auto justify-center items-center ">
          {cars.map((data, i) => (
            <CarCard
              key={i}
              img={data.img}
              name={data.name}
              transmission={data.transmission}
              fuel={data.fuel}
              year={data.year}
              speed={data.speed}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
