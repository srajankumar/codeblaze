"use client";
import React, { useState, useEffect, useRef } from "react";
import { Cursor } from "react-simple-typewriter";

interface typeprops {
  message: string;
  cursor?: string;
}
const TypingAnimation = ({
  message = "This is a typing animation",
  cursor = "|",
}: typeprops) => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const typingContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px", // margin around the viewport
      threshold: 0.5, // trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is visible, start typing animation
          setIsTyping(true);
          startTypingAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (typingContainerRef.current) {
      observer.observe(typingContainerRef.current);
    }

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, []);

  const startTypingAnimation = () => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= message.length) {
        setText(message.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 150);
  };

  return (
    <div ref={typingContainerRef}>
      <span>{text}</span>
      <Cursor cursorStyle="." cursorColor="#C76988" cursorBlinking={true} />
    </div>
  );
};

export default TypingAnimation;
