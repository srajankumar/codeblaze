import Image from "next/image";
import TypingAnimation from "./TextAnimation/TextType";

const Hero = () => {
  return (
    <div>
      <div className="flex w-fit">
        <h1 className="px-4 flex items-end text-6xl select-none md:text-9xl sm:text-8xl font-poppinsSB md:py-3 py-2">
          <Image
            width={500}
            height={500}
            unoptimized={true}
            priority
            className="md:w-40 sm:w-[7.5rem] sm:pb-3 w-[4.5rem] md:pb-4 pb-2 pr-1"
            src="/icon.svg"
            alt="sosc"
          />
          <TypingAnimation message="deblaze" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
