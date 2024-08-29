import React from "react";
import selectionpic from "../assets/SelectionPic.png";

const Selection = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <div className=" w-[800px] h-[410px] mt-16 flex flex-row  rounded-[44px] shadow-2xl  ">
        <div className="w-[360px] h-[410px]  rounded-bl-[44px] rounded-tl-[44px]">
          <img src={selectionpic} alt="home-pic" />
        </div>
        <div className="w-[440px] h-[410px]  flex-col flex items-center justify-center rounded-tr-[44px] rounded-br-[44px] "></div>
      </div>
    </div>
  );
};

export default Selection;
