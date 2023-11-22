import React from "react";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

import TypingAnimation from "@/components/TextAnimation/TextType";

const AlertCard = () => {
  const alertData = [
    {
      name: "Manjunath",
      phone: "+91 987 654 3218",
      email: "example@gmail.com",
    },
    {
      name: "Pratheeksha",
      phone: "+91 87624 58575",
      email: "example@gmail.com",
    },
  ];

  return (
    <div className="my-20 mb-28 xl:mx-40 md:mx-20 mx-10">
      <h1 className="my-5 select-none text-3xl md:text-4xl font-poppinsB py-5">
        <TypingAnimation message="Contact" />
      </h1>
      <div className="flex justify-between md:flex-row flex-col items-center md:space-x-10">
        {alertData.map((item, index) => (
          <Alert key={index} className="md:w-[40rem] md:mt-0 mt-5">
            <div className="flex w-full">
              <Terminal className="h-6 w-6 mt-1 mr-3" />
              <div>
                <AlertTitle className="text-xl tracking-wide font-poppinsSB">
                  {item.name}
                </AlertTitle>
                <AlertDescription className="flex tracking-wide flex-col text-base md:text-lg flex-wrap">
                  <Link
                    className="hover:underline underline-offset-4"
                    href={`tel:${item.phone}`}
                  >
                    {item.phone}
                  </Link>
                  <Link
                    className="hover:underline underline-offset-4"
                    href={`mailto:${item.email}`}
                  >
                    {item.email}
                  </Link>
                </AlertDescription>
              </div>
            </div>
          </Alert>
        ))}
      </div>
    </div>
  );
};

export default AlertCard;
