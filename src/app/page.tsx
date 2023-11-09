import Hero from "@/components/Hero";
import RegisterButton from "@/components/RegisterButton";
import TextRunner from "@/components/TextRunner";
import { Cursor } from "react-simple-typewriter";

import ScrollToTopButton from "@/components/ScrollToTopButton";

import Date from "@/components/Date";
import About from "@/components/About";
import Themes from "@/components/Themes";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Organizers from "@/components/Organizers";
import CountDown from "@/components/TextAnimation/CountDown";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex flex-col select-none h-screen justify-center items-center">
        <Hero />
        {/* <div className="md:text-3xl select-none text-xl sm:text-2xl font-poppinsSB">
          <TextRunner />
        </div> */}
        <div className="flex mb-5 font-poppinsSB items-center">
          {/* <h1 className="md:text-2xl text-lg px-3">8 & 9</h1> */}
          <img className="w-12 pr-2" src="/sosc-trans.png" alt="" />
          <span className="md:text-2xl text-lg">|</span>
          <h1 className="md:text-2xl text-lg pl-3">hackathon</h1>
          <div className="md:text-3xl select-none pr-3 text-xl sm:text-2xl font-poppinsSB">
            <Cursor
              cursorStyle="."
              cursorColor="#C76988"
              cursorBlinking={true}
            />
          </div>
        </div>

        {/* <RegisterButton /> */}
        <img
          className="absolute opacity-50 right-0 top-full -z-10"
          src="/assets/background/blur1.png"
          alt=""
        />
        <img
          className="absolute opacity-80 top-full pt-[40rem] left-0 -z-10"
          src="/assets/background/blur2.png"
          alt=""
        />
      </div>

      <ScrollToTopButton />

      <div className="lg:px-20 md:px-10">
        {/* <Date /> */}
        <CountDown/>
        <About />
        <Themes />
        <Events />
        <Organizers />
      </div>
      <Footer />
    </main>
  );
}
