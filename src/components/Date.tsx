"use client";
import React, { useState } from "react";
import Timer from "./Timer";
import TextRunner from "@/components/TextRunner";

const RegistrationButton = () => {
  const revealTime = new Date("2023-12-08T12:00:00").getTime();
  const [hackathonRevealed, setHackathonRevealed] = useState(false);

  const handleTimeout = () => {
    setHackathonRevealed(true);
  };

  return (
    <div className="select-none">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="md:text-3xl select-none text-xl sm:text-2xl font-poppinsSB">
          8th and 9th December
        </h1>
        <div className="md:pt-5 pt-2 font-poppinsSB tracking-widest text-center text-2xl md:text-3xl">
          {!hackathonRevealed ? (
            <Timer targetTime={revealTime} onTimeout={handleTimeout} />
          ) : (
            <div>Hackathon Has Begun!</div>
          )}
        </div>
        <div className="md:text-3xl md:pt-5 pt-2 select-none text-xl sm:text-2xl font-poppinsSB">
          <TextRunner />
        </div>
      </div>
    </div>
  );
};

export default RegistrationButton;
