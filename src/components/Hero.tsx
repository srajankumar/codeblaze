import Image from "next/image";

const Hero = () => {
  return (
    <div className="md:w-2/3 lg:md:w-3/5 sm:px-0 px-5 sm:w-3/4">
      <Image
        width={1500}
        unoptimized={true}
        priority
        height={500}
        src="/logo.svg"
        alt="codeblaze"
      />
    </div>
  );
};

export default Hero;
