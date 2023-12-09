"use client";
import { Cursor } from "react-simple-typewriter";

import Confetti from "react-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const Countdown = () => {
  const HOUR = 60 * 60; // seconds in an hour
  const MINUTE = 60; // seconds in a minute

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [timerStopped, setTimerStopped] = useState(false);

  useEffect(() => {
    const startTime = 7 * HOUR + 0 * MINUTE; // 7:00 AM in seconds
    const stopTime = 14 * HOUR + 0 * MINUTE; // 2:00 PM in seconds

    const updateRemainingTime = () => {
      const currentTimeInSeconds = getCurrentTimeInSeconds();

      if (currentTimeInSeconds < stopTime) {
        // Countdown logic
        setRemaining({
          days: Math.floor((stopTime - currentTimeInSeconds) / (24 * HOUR)),
          hours: Math.floor(
            ((stopTime - currentTimeInSeconds) % (24 * HOUR)) / HOUR
          ),
          minutes: Math.floor(
            ((stopTime - currentTimeInSeconds) % HOUR) / MINUTE
          ),
          seconds: Math.floor((stopTime - currentTimeInSeconds) % MINUTE),
        });
      } else {
        // Timer has stopped
        setRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        setTimerStopped(true);
      }
    };

    updateRemainingTime(); // Initial call to set the remaining time

    const intervalId = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getCurrentTimeInSeconds = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return hours * HOUR + minutes * MINUTE + seconds;
  };

  return (
    <div className="p-4 space-y-3 h-screen flex flex-col justify-center items-center">
      {!timerStopped && (
        <div
          className={`${
            remaining.hours >= 20 ? "text-red-400" : "text-violet-400"
          } w-full font-poppinsR max-w-5xl mx-auto flex items-center`}
        >
          <CountdownItem num={remaining.days} text="days" />
          <CountdownItem num={remaining.hours} text="hours" />
          <CountdownItem num={remaining.minutes} text="minutes" />
          <CountdownItem num={remaining.seconds} text="seconds" />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {timerStopped && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="md:text-8xl sm:text-7xl text-5xl select-none tracking-wide font-poppinsSB"
          >
            Hackathon Ended
            <Cursor
              cursorStyle="!"
              cursorColor="#C76988"
              cursorBlinking={true}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const CountdownItem = ({ num, text }: { num: number; text: string }) => {
  return (
    <div className="w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block font-poppinsSB md:text-7xl text-5xl lg:text-8xl font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-sm lg:text-base font-poppinsSB tracking-wide text-white">
        {text}
      </span>
    </div>
  );
};

export default Countdown;
