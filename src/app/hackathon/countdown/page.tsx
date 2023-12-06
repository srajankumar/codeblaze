// "use client";
// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   const getCurrentTimeInSeconds = () => {
//     const currentTime = new Date();
//     const hours = currentTime.getHours();
//     const minutes = currentTime.getMinutes();
//     const seconds = currentTime.getSeconds();
//     return hours * 3600 + minutes * 60 + seconds;
//   };

//   const [seconds, setSeconds] = useState(0);
//   const [countingDown, setCountingDown] = useState(true);
//   const [timerStopped, setTimerStopped] = useState(false);

//   useEffect(() => {
//     const currentTimeInSeconds = getCurrentTimeInSeconds();
//     const countdownEnd = 13 * 3600 + 25 * 60; // 12:30 in seconds
//     const countupEnd = countdownEnd + 5 * 60; // 10 minutes in seconds

//     if (currentTimeInSeconds < countdownEnd) {
//       // Countdown logic
//       setSeconds(countdownEnd - currentTimeInSeconds);
//     } else if (currentTimeInSeconds < countupEnd) {
//       // Count up logic
//       setCountingDown(false);
//       setSeconds(currentTimeInSeconds - countdownEnd);
//     } else {
//       // Timer has stopped
//       setTimerStopped(true);
//     }

//     const intervalId = setInterval(() => {
//       if (countingDown) {
//         // Countdown logic
//         if (seconds > 0) {
//           setSeconds((prevSeconds) => prevSeconds - 1);
//         } else {
//           setCountingDown(false);
//         }
//       } else {
//         // Count up logic
//         if (seconds < 300) {
//           // 10 minutes in seconds
//           setSeconds((prevSeconds) => prevSeconds + 1);
//         } else {
//           setTimerStopped(true);
//         }
//       }
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [seconds, countingDown]);

//   const formatTime = (timeInSeconds) => {
//     const hours = Math.floor(timeInSeconds / 3600);
//     const minutes = Math.floor((timeInSeconds % 3600) / 60);
//     const seconds = timeInSeconds % 60;

//     return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
//       seconds < 10 ? "0" : ""
//     }${seconds}`;
//   };

//   return (
//     <div>
//       <h1>{formatTime(seconds)}</h1>
//       <p>{countingDown ? "Counting Down" : "Counting Up"}</p>
//       {timerStopped && <p>The timer has stopped!</p>}
//     </div>
//   );
// };

// export default Timer;
"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Timer = () => {
  const getCurrentTimeInSeconds = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return hours * 3600 + minutes * 60 + seconds;
  };

  const [seconds, setSeconds] = useState(0);
  const [countingDown, setCountingDown] = useState(true);
  const [timerStopped, setTimerStopped] = useState(false);

  useEffect(() => {
    const currentTimeInSeconds = getCurrentTimeInSeconds();
    const countdownEnd = 16 * 3600 + 6 * 60; // 13:25 in seconds
    const countupEnd = countdownEnd + 1 * 60; // 5 minutes in seconds

    if (currentTimeInSeconds < countdownEnd) {
      // Countdown logic
      setSeconds(countdownEnd - currentTimeInSeconds);
    } else if (currentTimeInSeconds < countupEnd) {
      // Count up logic
      setCountingDown(false);
      setSeconds(Math.max(currentTimeInSeconds - countdownEnd, 0));
    } else {
      // Timer has stopped
      setTimerStopped(true);
    }

    const intervalId = setInterval(() => {
      if (countingDown) {
        // Countdown logic
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          setCountingDown(false);
        }
      } else {
        // Count up logic
        if (seconds < 60) {
          // 5 minutes in seconds
          setSeconds((prevSeconds) => prevSeconds + 1);
        } else {
          setTimerStopped(true);
        }
      }
    }, 1000); // Set interval to 1000 milliseconds (1 second)

    return () => clearInterval(intervalId);
  }, [seconds, countingDown]);

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div className="p-4 space-y-3">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Your text or component goes here */}
      </motion.div>
      <div className="w-full font-poppinsR max-w-5xl mx-auto flex items-center">
        {/* Updated CountdownItem component */}
        <CountdownItem num={Math.floor(seconds / 86400)} text="days" />
        <CountdownItem
          num={Math.floor((seconds % 86400) / 3600)}
          text="hours"
        />
        <CountdownItem num={Math.floor((seconds % 3600) / 60)} text="minutes" />
        <CountdownItem num={seconds % 60} text="seconds" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Your text or component goes here */}
      </motion.div>
    </div>
  );
};

// CountdownItem component updated for the new structure
const CountdownItem = ({ num, text }: { num: number; text: string }) => {
  return (
    <div className="w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-3xl sm:text-4xl md:text-5xl font-poppinsSB lg:text-6xl text-violet-400 font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-sm lg:text-base font-light text-violet-400">
        {text}
      </span>
    </div>
  );
};

export default Timer;
