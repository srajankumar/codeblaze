"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Timer, Calendar } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
interface EventCardProps {
  title: string;
  coordinator_name?: string;
  coordinator_phone?: string;
  description: string;
  imageSrc: string;
  register?: string;
  rule?: string;
  link?: string;
  date?: string;
  time?: string;
  sentence?: string;
  collab_name?: string;
  collab_phone?: string;
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1e1e1e" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#1e1e1e" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1e1e1e" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const EventCard: React.FC<EventCardProps> = ({
  title,
  coordinator_name,
  coordinator_phone,
  description,
  imageSrc,
  register,
  rule,
  link,
  date,
  time,
  sentence,
  collab_name,
  collab_phone,
}) => {
  const renderOrganizers = () => {
    if (coordinator_name) {
      return (
        <div className="font-poppinsSB text-base text-violet-400 pt-3 tracking-wide mb-3">
          {collab_name ? <p>Organizers</p> : <p>Organizer</p>}
          <div className="font-poppinsR pt-2">
            {coordinator_name},{" "}
            <Link
              className="hover:underline underline-offset-4"
              href={`tel:+91${coordinator_phone}`}
            >
              {`+91${coordinator_phone}`}
            </Link>
          </div>
          {collab_name && (
            <div className="font-poppinsR pt-2">
              {collab_name},{" "}
              <Link
                className="hover:underline underline-offset-4"
                href={`tel:+91${collab_phone}`}
              >
                {`+91${collab_phone}`}
              </Link>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-4 w-full">
      <div className="md:flex hidden">
        <Tilt>
          {!link ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="text-left">
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
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <ScrollArea className="max-h-[90vh] px-6 py-5 rounded-md">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="mb-4 mt-2.5 text-2xl">
                      {title}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          placeholder={`data:image/svg+xml;base64,${toBase64(
                            shimmer(700, 475)
                          )}`}
                          height={500}
                          width={500}
                          className="rounded-xl w-full object-cover object-center"
                          src={`/assets/events/${imageSrc}`}
                          alt=""
                        />
                      </AspectRatio>
                      <p className="font-poppinsR text-base text-gray-300 pt-6 leading-relaxed mb-3">
                        {description}
                      </p>
                      {date && (
                        <div className="font-poppinsSB flex justify-between text-base text-pink-300 pt-3 leading-relaxed mb-3">
                          <div className="flex items-center space-x-2 tracking-wide">
                            <Calendar /> <div>{date}</div>
                          </div>
                          {time && (
                            <div className="flex items-center space-x-2 tracking-wide">
                              <Timer /> <div>{time}</div>
                            </div>
                          )}
                        </div>
                      )}
                      {renderOrganizers()}

                      {sentence && (
                        <p className="font-poppinsR pt-3 leading-relaxed tracking-wide">
                          {sentence}
                        </p>
                      )}

                      {title == "Firepower" && (
                        <div className="font-poppinsR pt-3 text-base text-gray-300 leading-relaxed tracking-wide">
                          <span className="font-poppinsSB text-white">
                            Note:
                          </span>{" "}
                          Spot registrations are{" "}
                          <span className="font-poppinsSB text-white">
                            strictly
                          </span>{" "}
                          not available.
                        </div>
                      )}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="pb-5">
                    <AlertDialogCancel className="absolute p-3 top-5 right-5">
                      X
                    </AlertDialogCancel>
                    <div className="flex w-full justify-between flex-wrap">
                      {register && (
                        <Link
                          className="mt-5 mb-0"
                          target="_blank"
                          href={register}
                        >
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
                        <Link
                          className="mt-5 mb-0"
                          target="_blank"
                          href={`/rulebooks/${rule}`}
                        >
                          <div className="group flex w-fit rounded-full border sm:border-transparent sm:px-7 px-6 sm:py-2 py-2 transition-colors bg-transparent sm:hover:border-neutral-700 border-neutral-700 hover:bg-neutral-800/30">
                            <h2 className="sm:text-lg tracking-wide font-poppinsSB">
                              Download Rule Book{" "}
                              <span className="inline-block text-purple-400 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                              </span>
                            </h2>
                          </div>
                        </Link>
                      )}
                    </div>
                  </AlertDialogFooter>
                </ScrollArea>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <AlertDialog>
              <button className="text-left">
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
              </button>
            </AlertDialog>
          )}
        </Tilt>
      </div>
      <div className="md:hidden flex">
        {!link ? (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="text-left">
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
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <ScrollArea className="max-h-[90vh] px-6 py-5 rounded-md">
                <AlertDialogHeader>
                  <AlertDialogTitle className="mb-4 mt-2.5 text-2xl">
                    {title}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        placeholder={`data:image/svg+xml;base64,${toBase64(
                          shimmer(700, 475)
                        )}`}
                        height={500}
                        width={500}
                        className="rounded-xl w-full object-cover object-center"
                        src={`/assets/events/${imageSrc}`}
                        alt=""
                      />
                    </AspectRatio>
                    <p className="font-poppinsR text-base text-gray-300 pt-6 leading-relaxed mb-3">
                      {description}
                    </p>
                    {date && (
                      <div className="font-poppinsSB flex justify-between text-base text-pink-300 pt-3 leading-relaxed mb-3">
                        <div className="flex items-center space-x-2 tracking-wide">
                          <Calendar /> <div>{date}</div>
                        </div>
                        {time && (
                          <div className="flex items-center space-x-2 tracking-wide">
                            <Timer /> <div>{time}</div>
                          </div>
                        )}
                      </div>
                    )}
                    {renderOrganizers()}

                    {sentence && (
                      <p className="font-poppinsR pt-3 leading-relaxed tracking-wide">
                        {sentence}
                      </p>
                    )}

                    {title == "Firepower" && (
                      <div className="font-poppinsR pt-3 text-base text-gray-300 leading-relaxed tracking-wide">
                        <span className="font-poppinsSB text-white">Note:</span>{" "}
                        Spot registrations are{" "}
                        <span className="font-poppinsSB text-white">
                          strictly
                        </span>{" "}
                        not available.
                      </div>
                    )}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="pb-5">
                  <AlertDialogCancel className="absolute p-3 top-5 right-5">
                    X
                  </AlertDialogCancel>
                  <div className="flex w-full justify-between flex-wrap">
                    {register && (
                      <Link
                        className="mt-5 mb-0"
                        target="_blank"
                        href={register}
                      >
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
                      <Link
                        className="mt-5 mb-0"
                        target="_blank"
                        href={`/rulebooks/${rule}`}
                      >
                        <div className="group flex w-fit rounded-full border sm:border-transparent sm:px-7 px-6 sm:py-2 py-2 transition-colors bg-transparent sm:hover:border-neutral-700 border-neutral-700 hover:bg-neutral-800/30">
                          <h2 className="sm:text-lg tracking-wide font-poppinsSB">
                            Download Rule Book{" "}
                            <span className="inline-block text-purple-400 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                              -&gt;
                            </span>
                          </h2>
                        </div>
                      </Link>
                    )}
                  </div>
                </AlertDialogFooter>
              </ScrollArea>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <AlertDialog>
            <button className="text-left">
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
            </button>
          </AlertDialog>
        )}
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  register?: string;
  rule?: string;
  link?: string;
  date?: string;
  time?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  register,
  rule,
  link,
  date,
  time,
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, rgb(255,115,0, 0.2), rgb(231,150,82,0))`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.background = "#d1f2f900";
  };

  return !link ? (
    <div
      className="button rounded-3xl border border-transparent hover:border-[#F1A340]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-full rounded-3xl bg-[#d1f2f9] bg-opacity-5 overflow-hidden">
        <div className="flex flex-col items-center p-6">
          <Image
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
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
        </div>
      </div>
    </div>
  ) : (
    <div
      className="button rounded-3xl border border-transparent hover:border-[#F1A340]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-full rounded-3xl bg-[#d1f2f9] bg-opacity-5 overflow-hidden">
        <div className="flex flex-col items-center p-6">
          <Image
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
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
          <div className="flex w-full justify-center flex-wrap">
            {link && (
              <Link target="_blank" className="mt-2" href={link}>
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
