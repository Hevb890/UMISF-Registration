import React from "react";
import ageRegister from "../assets/AgeRegister.png";
import Calender from "../Components/Calender";

const AgeRegister = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <div className=" w-[800px] mt-4 h-[410px]  flex flex-row  rounded-[44px] shadow-2xl ">
        <div className="w-[360px]  h-[410px]  rounded-bl-[44px] rounded-tl-[44px]">
          <img src={ageRegister} alt="home-pic" className="h-[410px]" />
        </div>
        <div className="w-[440px] h-[410px]  flex-col flex items-center justify-center rounded-tr-[44px] rounded-br-[44px] ">
          <form className="flex-col flex items-center justify-center mt-4">
            <input
              id="Name"
              placeholder="Name of Player"
              required
              className="text-center w-[300px] rounded-full h-[40px] drop-shadow-lg"
            />
            <input
              id="institute"
              placeholder="School or Club"
              required
              className="text-center w-[300px] rounded-full h-[40px] drop-shadow-lg  mt-2"
            />
            <input
              id="number"
              placeholder="Contact number"
              required
              className="text-center w-[300px] rounded-full h-[40px] drop-shadow-lg mt-2"
            />
            <div className="flex-row flex gap-4 mt-4">
              <div className="drop-shadow-lg bg-white p-2">
                <p className="font-medium">Gender</p>
                <div className="flex flex-row gap-2 ">
                  <label>
                    <input
                      type="radio"
                      placeholder="Male"
                      name="gender"
                      value="Male"
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      placeholder="Female"
                      name="gender"
                      value="Female"
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="drop-shadow-lg bg-white p-2">
                <p className="font-medium">Event</p>
                <div className="flex flex-row gap-2">
                  <label>
                    <input
                      type="checkbox"
                      placeholder="Singles"
                      name="Event"
                      value="Singles"
                      className="w-4 h-4 border-black"
                    />
                    Singles
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      placeholder="Doubles"
                      name="Event"
                      value="Doubles"
                      className="w-4 h-4"
                    />
                    Doubles
                  </label>
                </div>
              </div>
            </div>
            <div className="drop-shadow-lg bg-white p-2 mt-2">
              <p className="font-medium">Date of Birth</p>
              <Calender />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgeRegister;
