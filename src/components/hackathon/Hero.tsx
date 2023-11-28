import { siteConfig } from "@/config/site";

import TypingAnimation from "@/components/TextAnimation/TextType";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="px-4 text-5xl select-none md:text-7xl xl:text-8xl sm:text-6xl font-poppinsB py-5">
        <TypingAnimation message="Hackathon" />
      </h1>
      <div className="absolute z-40 float1 bottom-0 py-10">
        <svg
          className="w-8"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
          />
        </svg>
      </div>
    </div>
  );
};

export default About;
