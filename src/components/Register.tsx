import TypingAnimation from "@/components/TextAnimation/TextType";
import Link from "next/link";

const Register = () => {
  const items = [
    {
      title: "Visit Sankalp",
      downloadLink: "https://sankalp.sosc.org.in/",
    },
    {
      title: "Register",
      description:
        "Register yourself and your team members individually. If already registered, go to next step.",
    },
    {
      title: "Login",
      description:
        "Upon registration, a unique ID will be sent to you via the email address you provided during registration. Use this ID along with your credentials to login.",
    },
    {
      title: "Register for Hackathon",
      description:
        "Once logged in, you'll be redirected to the dashboard. From there, proceed to register for the Hackathon!",
    },
    {
      title: "QR Code",
      description:
        "Upon successful registration for the Hackathon, you will receive a confirmation email containing a QR code. Please ensure to bring this email with the attached QR code to the event venue, as it will serve as your admission pass. Presenting the QR code during the event will facilitate a smooth check-in process. Thank you, and we look forward to your participation!",
    },
    {
      title: "Events Registrations",
      description:
        "Also, Explore the exciting events listed on the platform and register for those that interest you. Make sure not to miss out on any cool opportunities! :)",
    },
  ];

  return (
    <div>
      <div className="py-20 md:mb-10 xl:mx-40 md:mx-20 mx-10 my-12 mb-20">
        <h1 className="text-3xl md:text-4xl font-poppinsB pb-10">
          <TypingAnimation message="Registration Process" />
        </h1>
        <div className="mx-5 gap-10">
          <ol className="relative border-s border-gray-700">
            {items.map((item, index) => (
              <li key={index} className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
                  {index + 1}
                </span>
                <h3 className="flex ml-2 font-poppinsSB tracking-wide items-center mb-1 text-xl font-semibold text-white">
                  {item.title}{" "}
                </h3>
                <p className="mb-4 ml-2 font-poppinsR text-base font-normal text-gray-400">
                  {item.description}
                </p>
                {item.downloadLink && (
                  <div className="ml-2 w-full flex">
                    <Link href={item.downloadLink} target="_blank">
                      <div className="group flex w-fit rounded-full border tracking-wide px-5 py-2 transition-colors sm:bg-transparent bg-neutral-800/30 sm:hover:border-neutral-700 border-neutral-700 hover:bg-neutral-800/30">
                        <h2 className="sm:text-lg flex space-x-2 tracking-wide font-poppinsSB">
                          <div>sankalp.sosc.org.in</div>
                          <span className="inline-block text-pink-400 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                          </span>
                        </h2>
                      </div>
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Register;
