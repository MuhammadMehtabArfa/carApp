import React from "react";
import Image from "next/image";

const StarIcon = () => (
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
);

const Slidescard = () => {
  return (
    <div className="card mt-[35px] border-red-500 border-2 rounded-[10px] w-[550px] h-auto flex-col ">
      <div className="flex p-4 items-center">
        <div className="w-12 h-12  relative">
          <Image src="/slider.png" layout="fill" />
        </div>
        <div className="ml-4">
          <h1 className="font-bold text-xl">Sami B</h1>
          <div className="flex">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
       
      </div>
      <p className="p-4">Lorem ipsum dolor sit amet consectetur. Eget eu dui venenatis pharetra euismod tincidunt a tincidunt. Est venenatis id ut quam curabitur scelerisque sagittis sed viverra. Nullam sagittis adipiscing duis semper ornare mollis iaculis. Ultricies in eget mi aliquet aliquet est.</p>
    </div>
  );
};

export default Slidescard;
