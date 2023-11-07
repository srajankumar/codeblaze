// Themes.js

"use client";
import Image from "next/image";
import TypingAnimation from "@/components/TextAnimation/TextType";

export default function Themes() {
  return (
    <div className="py-20 md:mb-10 px-2 md:px-0">
      <h1 className="px-4 text-3xl md:text-4xl font-poppinsB py-10">
        <TypingAnimation message="Themes" />
      </h1>
      <div className="px-4 grid md:grid-cols-2 gap-10">
        <Card img="company.png" theme="Company Specific" />
        <Card img="open.png" theme="Open Themes" />
      </div>
    </div>
  );
}

function Card({ theme, img }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-neutral-700 hover:border-[#6D76A3] group aspect-video">
      <div className="absolute inset-0 z-10 bg-zinc-950/70 transition-colors group-hover:bg-zinc-950/75" />
      <Image
        src={`/assets/themes/${img}`}
        // src={`/og.png`}
        alt=""
        fill
        className="object-cover w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110"
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <h1 className="text-center px-5 text-2xl lg:text-3xl font-poppinsSB text-white">
          {theme}
        </h1>
      </div>
    </div>
  );
}
