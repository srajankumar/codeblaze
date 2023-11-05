"use client";
import React, { useState } from "react";
import Timer from "./Timer";

const RegistrationButton = () => {
  const revealTime = new Date("2023-12-08T12:00:00").getTime();
  const [hackathonRevealed, setHackathonRevealed] = useState(false);

  const handleTimeout = () => {
    setHackathonRevealed(true);
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-4xl">
          8th and 9th December
        </h1>
        <div className="md:pt-5 pt-2 font-bold tracking-widest text-center text-2xl md:text-3xl">
          {!hackathonRevealed ? (
            <Timer targetTime={revealTime} onTimeout={handleTimeout} />
          ) : (
            <div>Hackathon Has Begun!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationButton;
