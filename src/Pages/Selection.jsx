import React, { useState } from "react";
import selectionpic from "../assets/SelectionPic.png";

const Selection = () => {
  // Array of event names
  const events = [
    "Age Group Championship",
    "Inter-University Championship",
    "University Individual Championship",
    "Novices Men's Championship",
    "U19 Invitational School Championship",
  ];

  // State to track selected events, initialized with all false (not selected)
  const [selected, setSelected] = useState(
    new Array(events.length).fill(false),
  );

  // Handle click to toggle event selection
  const handleClick = (index) => {
    setSelected((prevSelected) =>
      prevSelected.map((select, i) => (i === index ? !select : select)),
    );
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <div className="w-[800px] h-[410px] mt-4 flex flex-row rounded-[44px] shadow-2xl z-10 relative">
        <div className="w-[360px] h-[410px] rounded-bl-[44px] rounded-tl-[44px]">
          <img src={selectionpic} alt="home-pic" />
        </div>
        <div className="w-[440px] h-[410px] flex-col flex items-center justify-center rounded-tr-[44px] rounded-br-[44px] gap-2">
          {events.map((event, index) => (
            <div
              key={index}
              className={`${
                selected[index] ? "bg-slate-500" : "bg-black"
              } w-[300px] h-[40px] rounded-[20px] text-white flex items-center justify-center cursor-pointer transition-colors duration-200`}
              onClick={() => handleClick(index)}
            >
              {event}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selection;
