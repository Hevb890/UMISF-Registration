import React, { useState } from "react";

const Calendar = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleDate = (event) => {
    setDateOfBirth(event.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <i className="fa-regular fa-calendar-days text-gray-500"></i>
      <input
        id="dob"
        type="date"
        value={dateOfBirth}
        onChange={handleDate}
        className="border rounded px-2 py-1"
      />
    </div>
  );
};

export default Calendar;
