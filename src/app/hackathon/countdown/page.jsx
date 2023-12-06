"use client";
import React, { useState, useEffect } from "react";

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
    const countdownEnd = 13 * 3600 + 25 * 60; // 12:30 in seconds
    const countupEnd = countdownEnd + 5 * 60; // 10 minutes in seconds

    if (currentTimeInSeconds < countdownEnd) {
      // Countdown logic
      setSeconds(countdownEnd - currentTimeInSeconds);
    } else if (currentTimeInSeconds < countupEnd) {
      // Count up logic
      setCountingDown(false);
      setSeconds(currentTimeInSeconds - countdownEnd);
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
        if (seconds < 300) {
          // 10 minutes in seconds
          setSeconds((prevSeconds) => prevSeconds + 1);
        } else {
          setTimerStopped(true);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, countingDown]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div>
      <h1>{formatTime(seconds)}</h1>
      <p>{countingDown ? "Counting Down" : "Counting Up"}</p>
      {timerStopped && <p>The timer has stopped!</p>}
    </div>
  );
};

export default Timer;
