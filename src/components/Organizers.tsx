"use client";
import TypingAnimation from "@/components/TextAnimation/TextType";
import Link from "next/link";
import Image from "next/image";
const Organizers = () => {
  return (
    <div className="flex flex-col md:pt-36 justify-center py-10 px-2 md:px-0">
      {/* <h1 className="px-4 text-3xl select-none md:text-4xl font-poppinsB py-5">
        <TypingAnimation message="About" />
      </h1> */}
      <div className="px-4">
        <div className="grid md:flex grid-cols-2 w-full items-center justify-between">
          <Link
            href="https://www.sosc.org.in/"
            target="_blank"
            className="pr-10 md:pr-0 py-5 md:py-0 md:w-[20%] mx-auto hover:scale-105 transition duration-300 hover:-rotate-3"
          >
            <Image
              height={500}
              width={500}
              src="/assets/logo/sosc.png"
              alt="sosc"
            />
          </Link>
          <Link
            href="https://aerophilia.in/"
            target="_blank"
            className="py-5 md:py-0 md:w-[35%] mx-auto hover:scale-105 transition duration-300 hover:rotate-3"
          >
            <Image
              height={500}
              width={500}
              src="/assets/logo/aerophilia.png"
              alt="aerophilia"
            />
          </Link>

          <Link
            href="https://sahyadri.edu.in/"
            target="_blank"
            className="pr-10 md:pr-0 py-5 md:py-0 md:w-[20%] mx-auto hover:scale-105 transition duration-300 hover:-rotate-3"
          >
            <Image
              height={500}
              width={500}
              src="/assets/logo/sahyadri.png"
              alt="sahyadri"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
