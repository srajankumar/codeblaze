import { siteConfig } from "@/config/site";

import Link from "next/link";
import Image from "next/image";

const Events = () => {
  return (
    <div>
      <div className="md:px-20 my-10 py-5 md:py-10 mb-20 px-10 lg:px-32">
        <div className="flex space-x-10 sm:space-x-20 md:space-x-32 justify-center items-center">
          <Link href={siteConfig.scem} target="_blank">
            <Image
              height={500}
              width={500}
              src="/assets/logo/sahyadri.png"
              className="md:w-40 w-32 hover:scale-105 transition duration-300 hover:-rotate-3"
              alt="sahyadri"
            />
          </Link>
          <Link href={siteConfig.sosc} target="_blank">
            <Image
              height={500}
              width={500}
              src="/assets/logo/sosc.png"
              className="md:w-40 w-32 hover:scale-105 transition duration-300 hover:rotate-3"
              alt="sosc"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
