import React from "react";
import Image from "next/image";

const CarCard = ({ img, name, year, transmission, fuel, speed }) => {
  return (
    <div className="w-[350px]  h-[417px] flex-col relative bg-white">
      <div className="  relative ">
        <Image src={img} alt="" width={350} height={350} layout="responsive" />
      </div>
      <div className="p-3">
        <div className=" font-Inter font-semibold text-[18px]">
          <h1>{name}</h1>
        </div>
      
          <div className=" flex justify-between ">
            <div className="flex  items-center">
              <div className=" relative">
                <Image
                  src="/Calendar.png"
                  alt=""
                  width={12}
                  height={12}
                  layout="responsive"
                  className=" h-[12px] w-[12px] object-contain"
                />
              </div>
              <p className="text-[10px] ">{year}</p>
            </div>

            <div className="flex items-center">
              <div className="relative object-cover">
                <Image
                  src="/Gearbox.png"
                  alt=""
                  className="w-[12px] h-[12px]  "
                  width={12}
                  height={12}
                  layout="responsive"
                />
              </div>
              <p className="text-[10px]">{transmission}</p>
            </div>

            <div className="flex items-center">
              <div className="relative object cover">
                <Image
                  src="/gaspump.png"
                  alt=""
                  width={12}
                  height={12}
                  layout="responsive"
                />
              </div>
              <p className="text-[10px]">{fuel}</p>
            </div>

            <div className=" flex items-center">
              <div className="relative object-cover">
                <Image
                  src="/Speed.png"
                  alt=""
                  width={12}
                  height={12}
                  
                />
              </div>{" "}
              <p className="text-[10px]">{speed}</p>
            </div>
          </div>
        
        <div className="flex justify-around gap-1 mt-2 ">
          <button className="w-[50%] bg-black-main text-center px-4 text-white font-Inter">
            I’m Interested
          </button>
          <button className="w-[50%] bg-light-main text-center px-4 py-1 text-slate-600 font-Inter">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
