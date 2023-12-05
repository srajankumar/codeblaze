import Hero from "@/components/Hero";
import RegisterButton from "@/components/RegisterButton";
import TextRunner from "@/components/TextRunner";
import { Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Contact from "@/components/hackathon/Contact";

// import { Link } from "react-scroll";
import Link from "next/link";
import Map from "@/components/Map";

import { siteConfig } from "@/config/site";

import ScrollToTopButton from "@/components/ScrollToTopButton";

import Date from "@/components/Date";
import About from "@/components/About";
import Themes from "@/components/Themes";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Organizers from "@/components/Organizers";
import CountDown from "@/components/TextAnimation/CountDown";
import Register from "@/components/Register";
import FAQ from "@/components/hackathon/Faq";

export default function Home() {
  return (
    <main className="w-full">
      <div
        id="home"
        className="flex flex-col select-none h-screen justify-center items-center"
      >
        <Hero />

        <div className="flex md:flex-row flex-col mb-5 font-poppinsSB items-center">
          <div className="flex w-fit md:mb-0 mb-5">
            <Image
              width={500}
              height={500}
              unoptimized={true}
              priority
              className="w-12 pr-2"
              src="/sosc-trans.svg"
              alt="sosc"
            />
            <span className="md:text-2xl text-lg">|</span>
            <h1 className="md:text-2xl text-lg pl-3 mr-5">hackathon</h1>
            {/* <div className="md:text-3xl select-none pr-0.5 md:pr-5 text-xl sm:text-2xl font-poppinsSB">
              <Cursor
                cursorStyle="."
                cursorColor="#C76988"
                cursorBlinking={true}
              />
            </div> */}
          </div>
          <RegisterButton />
        </div>

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

        {/* <RegisterButton /> */}
        <Image
          width={700}
          height={500}
          priority
          className="absolute opacity-50 right-0 top-full"
          src="/assets/background/blur1.png"
          alt=""
        />
        <Image
          width={700}
          height={500}
          priority
          className="absolute opacity-80 top-full pt-[90rem] left-0 "
          src="/assets/background/blur2.png"
          alt=""
        />
      </div>

      {/* <Navbar /> */}
      <ScrollToTopButton />

      <div className="lg:px-20 md:px-10">
        {/* <Date /> */}
        <div className="md:my-36 md:mt-40 text-center mt-24">
          {!siteConfig.register ? (
            <div className="md:text-3xl select-none text-xl sm:text-2xl font-poppinsSB">
              <TextRunner />
            </div>
          ) : (
            <></>
          )}
          <CountDown />
        </div>
        <About />
        {/* <Themes /> */}
        <Register />
        <Events />
        <Organizers />
        <Map />
      </div>
      <Footer />
    </main>
  );
}
