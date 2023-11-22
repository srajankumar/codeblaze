"use client";
// import TypingAnimation from "@/components/TextAnimation/TextType";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "./style.min.css";

import { events } from "@/components/constants/index.js";

import { textVariant, staggerContainer } from "@/components/utils/motion.js";

import Image from "next/image";

const EventCard = ({ event }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={event.date}
      iconStyle={{ background: event.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={event.icon}
            alt={event.description}
            height={1024}
            width={1024}
            className={`w-[50%] h-[80%] object-contain rounded-full bg-[${event.iconBg}]`}
          />
        </div>
      }
    >
      <div className="gradient_border md:hover:scale-[102%] cursor-default transition duration-300 backdrop-blur-sm bg-[#d1f2f9] bg-opacity-5 p-10">
        <h3 className="text-[#fffba4] text-xl md:text-[24px] font-jbExtrabold">
          {event.title}
        </h3>
        {/* <p
          className="text-secondary pt-3 text-[16px] font-jbMedium"
          style={{ margin: 0 }}
        >
          {event.description}
        </p>{" "} */}
        <ul className="mt-5 space-y-2">
          {event.points.map((point, index) => (
            <li
              key={`event-point-${index}`}
              className="text-secondary pb-1 text-sm md:text-[16px] font-jbRegular"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`padding max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id="skill">
        {``}
      </span>

      <div className="text-4xl md:text-5xl pb-16 md:py-0 md:pt-10 font-jbExtrabold text-center"></div>

      <div className="md:my-20 flex flex-col">
        <VerticalTimeline>
          {events.map((event, index) => (
            <EventCard key={`event-${index}`} event={event} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default Experience;
