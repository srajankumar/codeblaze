import React, { useState, useEffect } from "react";

const Timer = ({ targetTime, onTimeout }) => {
  const calculateTimeRemaining = () => {
    const currentTime = new Date().getTime();
    const timeRemaining = Math.max(0, targetTime - currentTime);
    return timeRemaining;
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(updatedTimeRemaining);

      if (updatedTimeRemaining === 0) {
        clearInterval(timer);
        if (onTimeout) {
          onTimeout();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime, onTimeout]);

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${days < 10 ? "0" : ""}${days}:${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div>
      <div className="text-[#6D76A3]">{formatTime(timeRemaining)}</div>
    </div>
  );
};

export default Timer;
