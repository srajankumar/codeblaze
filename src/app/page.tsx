import Hero from "@/components/Hero";
import RegisterButton from "@/components/RegisterButton";
import TextRunner from "@/components/TextRunner";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import Date from "@/components/Date";
import About from "@/components/About";
import Themes from "@/components/Themes";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex flex-col h-screen justify-center items-center">
        <Hero />
        <div className="md:text-3xl text-2xl font-semibold">
          <TextRunner />
        </div>
        {/* <RegisterButton /> */}
        {/* <img
          className="absolute opacity-80 top-full pt-[40rem] left-0 -z-10"
          src="/blur1.png"
          alt=""
        />
        <img
          className="absolute opacity-50 right-0 top-full -z-10"
          src="/blur4.png"
          alt=""
        /> */}
      </div>

      <ScrollToTopButton />

      {/* <div className="lg:px-20 md:px-10">
        <Date />
        <About />
        <Themes />
        <Events />
      </div> */}
      <Footer />
    </main>
  );
}
