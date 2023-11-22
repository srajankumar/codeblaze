import React from "react";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertCard = () => {
  const alertData = [
    {
      title: "Heads up!",
      description:
        "You can add components to your app using tasdf asdf he cli.",
    },
    {
      title: "Another Title",
      description: "Another description for the card.",
    },
  ];

  return (
    <div className="flex justify-between md:flex-row flex-col items-center p-5 lg:p-10 xl:p-20 md:space-x-10">
      {alertData.map((item, index) => (
        <Alert key={index} className="md:w-[40rem] md:mt-0 mt-5">
          <div className="flex w-full">
            <Terminal className="h-4 w-4 mr-3" />
            <div>
              <AlertTitle>{item.title}</AlertTitle>
              <AlertDescription className="flex flex-wrap">
                {item.description}
              </AlertDescription>
            </div>
          </div>
        </Alert>
      ))}
    </div>
  );
};

export default AlertCard;
