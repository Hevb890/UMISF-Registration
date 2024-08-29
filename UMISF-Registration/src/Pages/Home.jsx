import React from "react";
import homepic from "../assets/homepic.png";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <div className=" w-[800px] mt-4 h-[410px]  flex flex-row  rounded-[44px] shadow-2xl ">
        <div className="w-[360px]  h-[410px]  rounded-bl-[44px] rounded-tl-[44px]">
          <img src={homepic} alt="home-pic" />
        </div>
        <div className="w-[440px] h-[410px]  flex-col flex items-center justify-center rounded-tr-[44px] rounded-br-[44px] ">
          <p className="text-[50px] font-semibold font-[sans-serif] ">
            UMISF 2025
          </p>
          <p className="text-[15px] font-medium tracking-[2px] mt-[-8px] mb-[30px]">
            BADMINTON CHAMPIONSHIP
          </p>
          <form className="flex-col flex items-center justify-center mt-4">
            <input
              id="Email"
              placeholder="Enter your Email"
              required
              className="text-center w-[300px] rounded-full h-[40px] drop-shadow-lg"
            />
            <button
              type="submit"
              className="mt-4 bg-black w-[90px] h-[40px] text-white rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
