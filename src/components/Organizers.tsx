import { siteConfig } from "@/config/site";

import Link from "next/link";
import Image from "next/image";

const Events = () => {
  return (
    <div>
      <div className="pb-10 mb-20 px-10">
        <div className="flex justify-center items-center flex-wrap">
          <Link href={siteConfig.scem} target="_blank">
            <Image
              height={500}
              width={500}
              src="/assets/logo/sahyadri.png"
              className="md:w-40 w-32 mt-16 mx-10 hover:scale-105 transition duration-300 hover:-rotate-3"
              alt="sahyadri"
            />
          </Link>
          <Link href={siteConfig.sosc} target="_blank">
            <Image
              height={500}
              width={500}
              src="/assets/logo/sosc.png"
              className="md:w-40 w-32 mt-16 mx-10 hover:scale-105 transition duration-300 hover:rotate-3"
              alt="sosc"
            />
          </Link>
          <Link href="https://ieee-mangalore.org/" target="_blank">
            <Image
              height={500}
              width={500}
              src="/assets/logo/ieee.png"
              className="md:w-60 w-40 mt-16 mx-10 hover:scale-105 transition duration-300 hover:-rotate-3"
              alt="ieee"
            />
          </Link>
          <Link href="https://www.wolframalpha.com/" target="_blank">
            <Image
              height={500}
              width={500}
              src="/assets/logo/wolfram.svg"
              className="w-60 mt-16 mx-10 hover:scale-105 transition duration-300 hover:rotate-3"
              alt="wolfram"
            />
          </Link>
          <Link href="https://sulthandiamondsandgold.com" target="_blank">
            <Image
              height={500}
              width={500}
              src="/assets/logo/sulthan.png"
              className="md:w-64 w-52 mt-16 mx-10 hover:scale-105 transition duration-300 hover:-rotate-3"
              alt="sulthan"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
