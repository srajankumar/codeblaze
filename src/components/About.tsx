import TypingAnimation from "@/components/TextAnimation/TextType";
import Link from "next/link";
const About = () => {
  return (
    <div className="md:min-h-screen flex flex-col pt-36 justify-center py-10 px-2 md:px-0">
      <h1 className="px-4 text-3xl select-none md:text-4xl font-poppinsB py-5">
        <TypingAnimation message="About" />
      </h1>
      <div className="px-4 font-poppinsR leading-8 space-y-5 text-lg">
        <p>
          <span className="grad font-poppinsB text-xl tracking-wide">
            Codeblaze
          </span>{" "}
          is an extraordinary tech extravaganza by{" "}
          <span className="transition duration-300">
            <Link
              className="hover:underline font-poppinsSB grad1 leading-8 transition duration-300 underline-offset-4"
              href="https://www.sosc.org.in/"
              target="_blank"
            >
              Sahyadri Open Source Community (SOSC)
            </Link>{" "}
          </span>
          , is set to be a thrilling event spanning technical and non-technical
          domains. It aims to empower participants with knowledge and skills
          while fostering curiosity and innovation. With a variety of
          tech-focused events, it offers opportunities for growth and
          self-discovery. Join the{" "}
          <span className="grad font-poppinsB text-xl tracking-wide">
            24-hour on-site Hackathon
          </span>{" "}
          to turn your innovative ideas into reality, with themes suitable for
          all skill levels.
        </p>
      </div>
    </div>
  );
};

export default About;
