import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import CarCard from "@/Components/CarCard";
import Slidescard from "./Slidescard";
const Home = () => {
  return (
    <section>
      {/* 1st part */}
      <div className=" bg-[url('/background.png')] bg-no-repeat bg-cover h-[60vh]   ">
        <h1
          className="max-container padding-container font-Inter  font-bold  text-center w-[50%] md:float-start  pt-[50px]   
        text-[23px] outline-black-main bg-black-main bg-opacity-10  text-white sm:text-[30px] md:text-[40px] lg:text-[50px] "
        >
          Take the next step Of your business
        </h1>
      </div>

      {/* 2nd part */}
      <div className=" bg-white text-black-main py-4 flex flex-col items-center font-Italiana max-container padding-container mt-[40px]">
        <h1 className="font-semi-bold text-[23px] md:text-[28px] lg:text-[33px] py-[15px] font-Italiana">
          Welcome to Devoted Motors
        </h1>
        <div className=" grid grid-cols-1 justify-between  md:flex md:flex-wrap gap-8 text-justify ">
          <div className="md:w-[25%]  ">
            <h1 className="pb-3  md:text-start text-center"> </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus quis facilisis elit
              dolor adipiscing egestas morbi hac. Eget consectetur rhoncus nunc
              quisque amet adipiscing in molestie amet. Sodales facilisi sociis
              elit adipiscing at ut lorem. Aliquet ultricies eget et nec sit
              lectus senectus.
            </p>
            <a href="" className=" underline hover:text-blue-700">
              source
            </a>
          </div>
          <div className="md:w-[25%]  ">
            <h1 className="pb-3 md:text-start text-center"> Blog 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus quis facilisis elit
              dolor adipiscing egestas morbi hac. Eget consectetur rhoncus nunc
              quisque amet adipiscing in molestie amet. Sodales facilisi sociis
              elit adipiscing at ut lorem. Aliquet ultricies eget et nec sit
              lectus senectus.
            </p>
            <a href="" className=" underline hover:text-blue-700">
              source
            </a>
          </div>
          <div className="md:w-[25%]  ">
            <h1 className="pb-3  md:text-start text-center">Blog 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus quis facilisis elit
              dolor adipiscing egestas morbi hac. Eget consectetur rhoncus nunc
              quisque amet adipiscing in molestie amet. Sodales facilisi sociis
              elit adipiscing at ut lorem. Aliquet ultricies eget et nec sit
              lectus senectus.
            </p>
            <a href="" className=" underline hover:text-blue-700">
              source
            </a>
          </div>
        </div>
      </div>

      {/* 3rd part */}
      <div className="bg-black-main max-container  ">
        <div className="max-container padding-container p-3 ">
          <h1 className="text-white text-center text-[30px] md:text-[45px] lg:text-[60px] font-Italiana  pt-4 pb-2 ">
            New Arrivals
          </h1>
          <div className="flex items-center justify-around flex-wrap gap-3 max-container padding-container ">
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
          <div className="items-center flex mt-[40px] mb-[30px] justify-around max-container padding-container">
            {" "}
            <button className=" font-Inter text-black-main bg-light-main items-center rounded-[69px] ">
              {" "}
              <p className="p-3 text-[10px] md:text-[20px] hover:bg-white hover:text-black-main rounded-[69px]">
                View Stock
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* 4th portion */}

      <div className="flex flex-col items-center justify-center padding-container">
        <Image src="/google.png" width={160} height={100} alt="" />
        <div className=" mt-[-35px] flex justify-center padding-container">
          <h2 className=" font-Inter text-[20px] ">Reviews</h2>
          <div className="flex w-[140px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-yellow-600"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-yellow-600"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-yellow-600"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-yellow-600"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-yellow-600"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <h2 className=" mt-4 text-black-main border-b-2 border-black-main font-Inter text-[19px]">
          {" "}
          <a href="http://">View All</a>
        </h2>
        <div>
          <Slidescard />
        </div>
      </div>

      {/* 5th portion */}

      <div className="bg-black-main pb-[20px] mt-[50px]">
        <h1 className="pt-4 text-white text-center text-[30px] py-[10px] ">
          Cars
        </h1>

        <div className="flex flex-wrap gap-4 md:gap-6 justify-evenly padding-container max-container ">
          <div className="relative w-[170px] h-[222px]">
            <Image
              src="/car1.png"
              layout="fill"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative  w-[170px] h-[222px]">
            <Image
              src="/car3.png"
              layout="fill"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative w-[170px] h-[222px]">
            <Image
              src="/car2.png"
              layout="fill"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* 5th section */}
      <div className="bg-light-main font-Italiana pt-[20px] pb-[20px] padding-container flex flex-col gap-3 justify-around text-center md:text-start items-center">
        <h1 className="text-2xl text-center md:text-start  md:text-3xl lg:text-4xl">
          Established Name in the Car Local and Export Sales
        </h1>
        <div className="font-Italiana">
          <h1 className="text-lg text-center md:text-start md:text-xl lg:text-2xl font-InriaSerif">
            Our Vision
          </h1>
          <p className="text-sm md:text-base font-InriaSerif pl-8">
            - to protect and grow our reputation as a trusted vehicle provider
            worldwide and to lead as a car exporter in Dubai
          </p>
        </div>
        <div className="font-Italiana">
          <h1 className="text-lg text-center md:text-start md:text-xl lg:text-2xl font-InriaSerif">
            Our Vision
          </h1>
          <p className="text-sm md:text-base font-InriaSerif pl-8">
            - to protect and grow our reputation as a trusted vehicle provider
            worldwide and to lead as a car exporter in Dubai
          </p>
        </div>
        <div className="font-Italiana">
          <h1 className="text-lg md:text-xl lg:text-2xl text-center md:text-start font-InriaSerif">
            Our Vision
          </h1>
          <p className="text-sm md:text-base font-InriaSerif pl-8">
            - to protect and grow our reputation as a trusted vehicle provider
            worldwide and to lead as a car exporter in Dubai
          </p>
        </div>
        <div className=" gap-[37px] md:gap-[80px] lg:gap-[90px] text-center flex justify-between">
          <div>
            <h1 className="md:text-[20px] lg:text-[25px] font-Inter font-bold">
              20 <br /> Years
            </h1>
          </div>
          <div>
            <h1 className="md:text-[20px] lg:text-[25px] font-Inter font-bold">
              50 <br /> Cars sold{" "}
            </h1>
          </div>
          <div>
            <h1 className="md:text-[20px] lg:text-[25px] font-Inter font-bold">
              150 <br /> Inventory{" "}
            </h1>
          </div>
        </div>
      </div>
      {/* 6th section */}
      <div className="bg-black-main pb-[20px] ">
        <h1 className="pt-4 md:text-[20px] lg:text-[30px] text-white text-center text-[15px] py-[10px] ">
          Our Partners
        </h1>
        <Marquee speed={2}>
          <div className="animate-loop-scroll overflow-hidden  flex space-x-16 text-[13px] md:text-[18px] lg:text-[27px]   text-white ">
            <span class="">Ferrari Auto Parts</span>,
            <span class="">Mustang Car Dealerships</span>,
            <span class="">Instagram Service Centers</span>,
            <span class="">Honda Rental Services</span>,
            <span class="">Toyota Technologies</span>,
            <span class="">Ferrari Insurance Solutions</span>,
            <span class="">Mustang Reviews</span>,
            <span class="">Instagram Events</span>,
            <span class="">Honda Parts Hub</span>,
            <span class="">Toyota Dealership Network</span>,
            <span class="">Ferrari Car Care</span>,
            <span class="">Mustang Rentals</span>,
            <span class="">Instagram Automotive Innovations</span>,
            <span class="">Honda Drive Expo</span>,
            <span class="">Toyota Repair Services</span>,
            <span class="">Ferrari Auto Blog</span>,
            <span class="">Mustang Trade Shows</span>,
            <span class="">Instagram Wheels</span>,
            <span class="">Honda Tech Solutions</span>,
            <span class="">Toyota Car Reviews</span>,
            <span class="">Ferrari Event Management</span>,
            <span class="">Mustang Insurance Partners</span>,
            <span class="">Instagram Drive</span>,
            <span class="">Honda Rental Network</span>,
            <span class="">Toyota Dealership Alliance</span>,
            <span class="">Ferrari Innovation Hub</span>,
            <span class="">Mustang Service Centers</span>,
            <span class="">Instagram Car Care</span>,
            <span class="">Honda Drive Expo</span>.
          </div>
        </Marquee>
      </div>

      {/* 7th section */}
      <div className=" pb-[70px] bg-light-main flex-col">
        <h1 className="p-4  text-2xl font-InriaSerif text-center">
          Our Cars, Your Pride
        </h1>
        <div className="flex">
          <div className="relative  w-[50%] h-[400px]">
            <Image src="/cardd.png" layout="fill" className="object-cover" />
          </div>
          <div className="relative h-[400px]  w-[50%] ">
            <Image src="/carddd.png" layout="fill" className="object-cover" />
          </div>
        </div>
      </div>

      {/* 8th section */}
      <div className=" bg-black-main text-white py-4 flex flex-col items-center font-Italiana max-container padding-container">
        <h1 className="font-semi-bold text-[23px] md:text-[28px] lg:text-[33px] py-[15px] font-Italiana">
          Our Blog
        </h1>
        <div className=" grid grid-cols-1 justify-between  md:flex md:flex-wrap gap-8 text-justify ">
          <div className="md:w-[25%]  ">
            <h1 className="pb-3  md:text-start text-center"> Blog 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus quis facilisis elit
              dolor adipiscing egestas morbi hac. Eget consectetur rhoncus nunc
              quisque amet adipiscing in molestie amet. Sodales facilisi sociis
              elit adipiscing at ut lorem. Aliquet ultricies eget et nec sit
              lectus senectus.
            </p>
            <a href="" className=" underline hover:text-blue-700">
              source
            </a>
          </div>
          <div className="md:w-[25%]  ">
            <h1 className="pb-3 md:text-start text-center"> Blog 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus quis facilisis elit
              dolor adipiscing egestas morbi hac. Eget consectetur rhoncus nunc
              quisque amet adipiscing in molestie amet. Sodales facilisi sociis
              elit adipiscing at ut lorem. Aliquet ultricies eget et nec sit
              lectus senectus.
            </p>
            <a href="" className=" underline hover:text-blue-700">
              source
            </a>
          </div>
          <div className="md:w-[25%]  ">
            <h1 className="pb-3  md:text-start text-center">Blog 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus quis facilisis elit
              dolor adipiscing egestas morbi hac. Eget consectetur rhoncus nunc
              quisque amet adipiscing in molestie amet. Sodales facilisi sociis
              elit adipiscing at ut lorem. Aliquet ultricies eget et nec sit
              lectus senectus.
            </p>
            <a href="" className=" underline hover:text-blue-700">
              source
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
