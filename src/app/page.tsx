import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RegisterButton from "@/components/RegisterButton";
import TextRunner from "@/components/TextRunner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      {/* <div className="flex h-screen justify-center items-center">
        <RegisterButton />
      </div> */}
      {/* <Navbar /> */}
      <div className="flex flex-col h-screen justify-center items-center">
        <Hero />
        <div className="fixed sm:mt-32 mt-28 md:mt-40 lg:mt-48 md:text-3xl text-2xl font-semibold">
          <TextRunner />
        </div>
      </div>

      {/* <div className="flex h-screen justify-center items-center">
        <Hero />
      </div>
      <div className="flex h-screen justify-center items-center">
        <Hero />
      </div> */}
    </main>
  );
}
