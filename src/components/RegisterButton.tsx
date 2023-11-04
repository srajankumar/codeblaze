import Link from "next/link";

const RegisterButton = () => {
  return (
    <Link href="">
      <div className="group rounded-full border border-transparent px-9 py-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`text-xl font-semibold`}>
          Register{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </div>
    </Link>
  );
};

export default RegisterButton;
