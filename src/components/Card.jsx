"use client";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({
  title,
  description,
  imageSrc,
  register,
  rule,
  link,
  date,
  time,
}) => {
  return (
    <div className="p-4 w-full">
      <div className="md:flex hidden">
        <Tilt>
          <Card
            title={title}
            description={description}
            imageSrc={imageSrc}
            register={register}
            rule={rule}
            link={link}
            date={date}
            time={time}
          />
        </Tilt>
      </div>
      <div className="md:hidden flex">
        <Card
          title={title}
          description={description}
          imageSrc={imageSrc}
          register={register}
          rule={rule}
          link={link}
          date={date}
          time={time}
        />
      </div>
    </div>
  );
};

const Card = ({
  title,
  description,
  imageSrc,
  register,
  rule,
  link,
  date,
  time,
}) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, rgb(255,115,0, 0.2), rgb(231,150,82,0))`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.background = "#d1f2f900";
  };

  return (
    <div
      className="button rounded-3xl border border-transparent hover:border-[#F1A340]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-full rounded-3xl bg-[#d1f2f9] bg-opacity-5 overflow-hidden">
        <div className="flex flex-col items-center p-6">
          <Image
            height={500}
            width={500}
            className="rounded-xl lg:h-48 md:h-36 w-full object-cover object-center"
            src={`/assets/events/${imageSrc}`}
            alt=""
          />
          <h1 className="mt-5 title-font text-2xl font-poppinsSB mb-3">
            {title}
          </h1>
          <div className="flex justify-between text-pink-300 w-full font-poppinsSB tracking-wider border-t-2 border-[#6D76A3] pt-3 leading-relaxed">
            <span>{date}</span> <span>{time}</span>
          </div>
          <p className="font-poppinsR pt-3 leading-relaxed mb-3">
            {description}
          </p>
          <div className="flex w-full justify-between flex-wrap">
            {register && (
              <Link className="my-1" target="_blank" href={register}>
                <div className="group flex w-fit rounded-full border sm:border-transparent sm:px-7 px-6 sm:py-2 py-2 transition-colors bg-transparent sm:hover:border-neutral-700 border-neutral-700 hover:bg-neutral-800/30">
                  <h2 className="sm:text-lg tracking-wide font-poppinsSB">
                    Register{" "}
                    <span className="inline-block text-purple-400 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                </div>
              </Link>
            )}
            {rule && (
              <Link className="my-1" target="_blank" href={rule}>
                <div className="group flex w-fit rounded-full border sm:border-transparent sm:px-7 px-6 sm:py-2 py-2 transition-colors bg-transparent sm:hover:border-neutral-700 border-neutral-700 hover:bg-neutral-800/30">
                  <h2 className="sm:text-lg tracking-wide font-poppinsSB">
                    Rule Book{" "}
                    <span className="inline-block text-purple-400 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                </div>
              </Link>
            )}
          </div>
          <div className="flex w-full justify-center flex-wrap">
            {link && (
              <Link target="_blank" href={link}>
                <div className="group flex w-fit rounded-full border sm:border-transparent sm:px-7 px-6 sm:py-2 py-2 transition-colors bg-transparent sm:hover:border-neutral-700 border-neutral-700 hover:bg-neutral-800/30">
                  <h2 className="sm:text-lg tracking-wide font-poppinsSB">
                    More Events{" "}
                    <span className="inline-block text-purple-400 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
