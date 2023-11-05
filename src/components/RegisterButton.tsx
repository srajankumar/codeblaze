// import Link from "next/link";

// const RegisterButton = () => {
//   return (
//     <Link href="" target="_blank">
//       <div className="buttons">
//         <button className="btn-hover rounded-full px-7 py-3 text-black color-1 font-bold text-xl">
//           Register Now!
//         </button>
//       </div>
//     </Link>
//   );
// };

// export default RegisterButton;
import { siteConfig } from "@/config/site";
import Link from "next/link";

const RegisterButton = () => {
  return (
    <div className="w-full flex justify-center">
      <Link href={siteConfig.register} target="_blank">
        <div className="group flex w-fit rounded-full border border-transparent px-9 py-3 transition-colors hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30">
          <h2 className={`text-lg font-semibold `}>
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
