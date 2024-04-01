import React from "react";
import Image from "next/image";
import CarCard from "@/Components/CarCard";
const Home = () => {
  return (
    <section>
      {/* 1st part */}
      <div className=" bg-[url('/background.png')] bg-no-repeat bg-cover h-[60vh] md:h-[70vh] sm:h-[60vh] lg:h-[110vh] ">
        <h1
          className="max-container padding-container font-Inter  font-bold  text-center w-[50vw] md:float-start  pt-[50px]   
        text-[23px]  text-white sm:text-[30px] md:text-[40px] lg:text-[50px] "
        >
          Take the next step Of your business
        </h1>
      </div>

      {/* 2nd part */}
      <div className=" bg-light-main py-4 flex flex-col items-center font-Italiana max-container padding-container">
        <h1 className="font-semi-bold text-[40px] py-[15px] font-Italiana">
          Welcome to Barugazi Motors
        </h1>
        <div className=" flex  gap-2 ">
          <div className="w-[30%]    ">
            <h1 className="pb-3"> Exclusive Car Discovery</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus quis facilisis elit
              dolor adipiscing egestas morbi hac. Eget consectetur rhoncus nunc
              quisque amet adipiscing in molestie amet. Sodales facilisi sociis
              elit adipiscing at ut lorem. Aliquet ultricies eget et nec sit
              lectus senectus.
            </p>
            <a href="" className=" underline hover:text-blue-700">
              see more
            </a>
          </div>
          <div className="w-[30%]  ">
            <h1 className="pb-3"> Exclusive Car Discovery</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus quis facilisis elit
              dolor adipiscing egestas morbi hac. Eget consectetur rhoncus nunc
              quisque amet adipiscing in molestie amet. Sodales facilisi sociis
              elit adipiscing at ut lorem. Aliquet ultricies eget et nec sit
              lectus senectus.
            </p>
            <a href="" className=" underline hover:text-blue-700">
              see more
            </a>
          </div>
          <div className="w-[30%]  ">
            <h1 className="pb-3"> Exclusive Car Discovery</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus quis facilisis elit
              dolor adipiscing egestas morbi hac. Eget consectetur rhoncus nunc
              quisque amet adipiscing in molestie amet. Sodales facilisi sociis
              elit adipiscing at ut lorem. Aliquet ultricies eget et nec sit
              lectus senectus.
            </p>
            <a href="" className=" underline hover:text-blue-700">
              see more
            </a>
          </div>
        </div>
      </div>

      {/* 3rd part */}
      <div className="bg-black-main w-screen  ">
        <div className="max-container padding-container p-3 ">
          <h1 className="text-white text-center text-[60px] font-Italiana  pt-4 pb-2 ">
            New Arrivals
          </h1>
          <div className="flex items-center justify-around flex-wrap gap-2 max-container padding-container ">
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
              <p className="p-3 text-[20px]">View Stock</p>
            </button>
          </div>
        </div>
      </div>

      {/* 4th portion */}


      <div className="flex flex-col items-center justify-center padding-container">
        
          <Image
          src='/google.png'
          width={160}
          height={100}
          alt=''
          />
          <div className=" mt-[-35px] flex justify-center padding-container">
            <h2 className=" font-Inter text-[20px] ">Reviews</h2>
            <div className="flex w-[140px] "><svg
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
            </svg></div>
            
          </div>
          <h2 className=" mt-4 text-black-main border-b-2 border-black-main font-Inter text-[19px]"> <a href="http://">View All</a></h2>
        
      </div>
    </section>
  );
};

export default Home;
