import { siteConfig } from "@/config/site";

import TypingAnimation from "@/components/TextAnimation/TextType";
import Link from "next/link";

const About = () => {
  return (
    <div className="md:mb-20 flex flex-col md:pt-20 pt-36 justify-center py-10 px-2 md:px-0">
      <h1 className="px-4 text-3xl select-none md:text-4xl font-poppinsB py-5">
        <TypingAnimation message="About" />
      </h1>
      <div className="px-4 font-poppinsR leading-8 space-y-5 text-lg">
        <p>
          <span className="grad font-poppinsB text-xl tracking-wide">
            {siteConfig.name}
          </span>{" "}
          is an extraordinary tech extravaganza by{" "}
          <span className="transition duration-300">
            <Link
              className="hover:underline font-poppinsSB grad1 leading-8 transition duration-300 underline-offset-4"
              href={siteConfig.sosc}
              target="_blank"
            >
              {siteConfig.organizer}
            </Link>
          </span>
          , is set to be a thrilling event spanning technical and non-technical
          domains. It aims to empower participants with knowledge and skills
          while fostering curiosity and innovation. With a variety of
          tech-focused events, it offers opportunities for growth and
          self-discovery. Join the{" "}
          <span className="grad font-poppinsB text-xl tracking-wide">
            20-hour on-site Hackathon
          </span>{" "}
          to turn your innovative ideas into reality, with themes suitable for
          all skill levels.
        </p>
      </div>
      <div className="flex flex-wrap px-4 py-5 z-30 font-poppinsR leading-8 text-lg">
        <Link
          href="/rulebooks/hackathon.pdf"
          className="mr-5 mb-5"
          target="_blank"
        >
          <div className="group flex w-fit rounded-full border tracking-wide px-5 py-2 transition-colors sm:bg-transparent bg-neutral-800/30 sm:hover:border-neutral-700 border-neutral-700 hover:bg-neutral-800/30">
            <h2 className="sm:text-lg text-sm font-poppinsSB">
              Download Hackathon Rulebook{" "}
              <span className="inline-block text-pink-400 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
