import React from "react";
import ageRegister from "../assets/AgeRegister.png";

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
              <div className="drop-shadow-lg bg-white p-2 rounded-lg">
                <p className="font-bold">Gender</p>
                <div className="flex flex-row gap-2 ">
                    <input
                      id = "male_radio"
                      type="radio"
                      placeholder="Male"
                      name="gender"
                      value="Male"
                    />
                    <label for="male_radio" className="text-md"> Male </label>
                    <input
                      id="female_radio"
                      type="radio"
                      placeholder="Female"
                      name="gender"
                      value="Female"
                    />
                    <label for="female_radio" className="text-md">Female</label>
                </div>
              </div>
              <div className="drop-shadow-lg bg-white p-2 rounded-lg">
                <p className="font-bold">Event</p>
                <div className="flex flex-row gap-2">
                    <input
                      id="single_checkbox"
                      type="checkbox"
                      placeholder="Singles"
                      name="Event"
                      value="Singles"
                    />
                    <label for="single_checkbox">Singles</label>
                  
                    <input
                    id="double_checkbox"
                      type="checkbox"
                      placeholder="Doubles"
                      name="Event"
                      value="Doubles"
                    />
                    <label for="double_checkbox">Doubles</label>
                    
                </div>
              </div>
            </div>
            <div className="drop-shadow-lg bg-white p-2 mt-2 rounded-lg">
              <p className="font-bold">Date of Birth</p>
              <input type="date" name="" id="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgeRegister;
