import TypingAnimation from "@/components/TextAnimation/TextType";
import Link from "next/link";
const About = () => {
  return (
    <div className="flex flex-col pt-36 justify-center py-10 px-2 md:px-0">
      <h1 className="px-4 text-3xl select-none md:text-4xl font-poppinsB py-5">
        <TypingAnimation message="About" />
      </h1>
      <div className="px-4 font-poppinsR space-y-5 text-lg">
        <p>
          <span className="grad font-poppinsB tracking-wide">Codeblaze</span> is
          a one-of-its kind technical extravaganza brought to you by the{" "}
          <span className="transition duration-300">
            <Link
              className="hover:underline font-poppinsSB text-green-500 leading-8 transition duration-300 underline-offset-4"
              href="https://www.sosc.org.in/"
              target="_blank"
            >
              Sahyadri Open Source Community (SOSC)
            </Link>{" "}
          </span>
          . In its inaugural edition, this exclusive{" "}
          <span className="transition duration-300">
            <span
              className="hover:underline font-poppinsSB text-blue-400 leading-8 transition duration-300 underline-offset-4"
              // href=""
              // target="_blank"
            >
              synergia
            </span>{" "}
          </span>
          is set to be among the most exciting and immersive events of the year.
          Spanning across several technical and non-technical domains, the event
          aspires to become the cornerstone of technical empowerment and
          individual growth by equipping participants with an extensive
          knowledge and skill set, while igniting a spark of curiosity,
          innovation and critical thinking. With a stellar lineup of events
          focused on exposing students to various realms of the tech world, this
          event promises to serve as a vessel of technical prowess and
          self-discovery, growth and endless opportunities.
        </p>
        <p>
          Embark on an exhilarating expedition into the realm of technology
          through Codeblaze, a
          <span className="grad font-poppinsB tracking-wide">
            {" "}
            24-hour on-site Hackathon{" "}
          </span>
          hosted by SOSC. At Codeblaze, participants have the opportunity to
          transform their innovative visions into reality through coding
          expertise. The event offers a diverse range of themes catering to
          individuals of varying skill levels, making it an inclusive experience
          for all- beginners and seasoned programmers alike.
        </p>
      </div>
    </div>
  );
};

export default About;
