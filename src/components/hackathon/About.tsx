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
          Hackathon: Participants present projects to judges, with
          company-funded or open-themed problem statements. Workshops cover tech
          stacks. Event includes intro,{" "}
          <span className="grad font-poppinsB text-xl tracking-wide">
            20-hour
          </span>{" "}
          hack, and three-phase evaluation: Design, Progress, Presentation.
          Judges assess approach, idea, business criteria, efficiency, speed,
          user experience, soft skills, cost, difficulty, and workforce. Final
          presentation is offline. Themes suit all skill levels.
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
        <Link
          href="https://forms.gle/Sdefet49u8pXukCR6"
          className="mr-5 mb-5"
          target="_blank"
        >
          <div className="group flex w-fit rounded-full border tracking-wide px-5 py-2 transition-colors sm:bg-transparent bg-neutral-800/30 sm:hover:border-neutral-700 border-neutral-700 hover:bg-neutral-800/30">
            <h2 className="sm:text-lg text-sm font-poppinsSB">
              Join waiting list{" "}
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
