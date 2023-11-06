import { siteConfig } from "@/config/site";
import Link from "next/link";

const RegisterButton = () => {
  return (
    <div className="w-full flex justify-center">
      <Link href={siteConfig.register} target="_blank">
        <div className="group flex w-fit rounded-full border sm:border-transparent sm:px-9 px-6 sm:py-3 py-2 transition-colors sm:bg-transparent bg-neutral-800/30 sm:hover:border-neutral-700 border-neutral-700 hover:bg-neutral-800/30">
          <h2 className="sm:text-lg font-poppinsSB">
            Register Now{" "}
            <span className="inline-block text-pink-400 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default RegisterButton;
