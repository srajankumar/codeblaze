"use client";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const initialSeconds = parseInt(localStorage.getItem("timerSeconds")) || 30;
  const initialCountingDown =
    localStorage.getItem("timerCountingDown") === "true" || true;

  const [seconds, setSeconds] = useState(initialSeconds);
  const [countingDown, setCountingDown] = useState(initialCountingDown);
  const [timerStopped, setTimerStopped] = useState(false);

  useEffect(() => {
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
        if (seconds < 120) {
          // 24 hours in seconds
          setSeconds((prevSeconds) => prevSeconds + 1);
        } else {
          setTimerStopped(true);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, countingDown]);

  useEffect(() => {
    // Save state to localStorage
    localStorage.setItem("timerSeconds", seconds.toString());
    localStorage.setItem("timerCountingDown", countingDown.toString());
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
      {seconds === 160 && (
        <p>This is a custom message displayed at 160 seconds!</p>
      )}
      <p>{countingDown ? "Counting Down" : "Counting Up"}</p>
      {timerStopped && <p>The timer has stopped!</p>}
    </div>
  );
};

export default Timer;
