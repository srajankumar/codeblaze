import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const page = () => {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center px-3">
        <Link href={`${siteConfig.url}/ui-battles.fig`} target="_blank">
          <div className="group flex w-fit rounded-full border tracking-wide px-5 py-2 transition-colors sm:bg-transparent bg-neutral-800/30 sm:hover:border-neutral-700 border-neutral-700 hover:bg-neutral-800/30">
            <h2 className="sm:text-lg font-poppinsSB">
              Download Figma File{" "}
              <span className="inline-block text-pink-400 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
